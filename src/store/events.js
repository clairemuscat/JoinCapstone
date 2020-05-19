import { db } from '..';


const SET_EVENTS ='SET_EVENTS'
const CREATE_EVENT='CREATE_EVENT'

export const setEvents = (events)=>({
    type:SET_EVENTS,
    events
})

export const createEvent =(event)=>({
    type:CREATE_EVENT,
    event
})
export const fetchEvents =(user)=>{
    return async(dispatch)=>{
        try{ let eventRefs = db.collection('events') 
            let snap = await eventRefs.where('attendees','array-contains',user.uid).get()
            const someEvents=[]
            snap.forEach(doc=>someEvents.push({id:doc.id,...doc.data()}))
            console.log('mushrooms',someEvents)
        
                dispatch(setEvents(someEvents)) 
            
           }  //need to get the userid 
        catch(err){
            console.log('error getting calendar events',err)
        }
    }
}

export const newEvent = (user,event)=>{
    return async(dispatch)=>{
        try{  
            console.log('broccoli',event)
            const newThing = await db.collection('events').add({
                title:event.title,
                    start:event.date.valueOf(),
                    attendees:[user.uid],
            })
           const id =newThing.id
            const snap=await db.collection('events').doc(id).get();
            const calendarEvent=snap.data()
            console.log('grapefruit',calendarEvent)
             dispatch(createEvent(calendarEvent))

        }
        //     console.log('marriage',event)
        //     await db.collection('events').doc(user.uid).set( {
        //     title:event.title,
        //     start:event.date,
        //     attendees:[user.uid],
        // })
        // const snap=await db.collection('events').doc(user.uid).get();
        // const calendarEvent=snap.data()
        // console.log('grapefruit',calendarEvent)
        //  dispatch(createEvent(calendarEvent))}
        catch(err){
            console.log('Error creating event',err)
        }
    }
}



export default (state=[],action)=>{
    switch(action.type){
        case SET_EVENTS:
            return action.events
        case CREATE_EVENT:
            return [...state,action.event]
        default:
            return state
    }
}