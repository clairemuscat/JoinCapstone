import { db } from '..';

const CREATE_MEETING ='CREATE_MEETING'
const GET_MEETINGS ='GET_MEETINGS'


export const createMeeting =(meeting) =>({
    type:CREATE_MEETING,
    meeting
})

export const getMeetings =(meetings)=>({
    type: GET_MEETINGS,
    meetings
})

export const fetchMeetings = (user) =>{
    return async(dispatch)=>{
        try{ let eventRefs = db.collection('events') 
            let snap = await eventRefs.where('attendees','array-contains',user.uid).get()
            const someEvents=[]
            snap.forEach(doc=>someEvents.push({id:doc.id,...doc.data()}))
            dispatch(getMeetings(someEvents)) 
           }  
        catch(err){
            console.log('error getting calendar events',err)
        }
    }
}

export const addMeeting = (match,user,event) =>{
return async(dispatch)=>{
    try{
        console.log('one',user)
        const newThing = await db.collection('events').add({
            title:event.title,
                start:event.date.valueOf(),
                host:user.uid,
                invite:match.id,
                attendees:match?[user.uid,match.id]:[user.uid],
                status:false
        })
        console.log('two')
       const id =newThing.id
       await db.collection('events').doc(id).set({
        title:event.title,
        start:event.date.valueOf(),
        host:user.uid,  //doesn't like the entire user input
        invite:match.id,
        attendees:match?[user.uid,match.id]:[user.uid],
        status:false,
        id:id
       })
       console.log('three')
        const snap=await db.collection('events').doc(id).get();
        const calendarEvent=snap.data()
         dispatch(createMeeting(calendarEvent))

    }
    catch(err){
        console.log('Error creating event',err)
    }
}
}


export default (state=[], action) =>{
    switch(action.type){
        case GET_MEETINGS:
            return action.meetings.filter(meeting=>meeting.status===false)
        case CREATE_MEETING:
            return [...state,action.meeting]
        default:
            return state
    }

}