import { db } from '..';


const SET_EVENTS ='SET_EVENTS'
const CREATE_EVENT='CREATE_EVENT'
const UPDATE_EVENT='UPDATE_EVENT'

export const setEvents = (events)=>({
    type:SET_EVENTS,
    events
})

export const createEvent =(event)=>({
    type:CREATE_EVENT,
    event
})

export const updateEvent =(event)=>({
    type:UPDATE_EVENT,
    event
})


export const fetchEvents =(user)=>{
    return async(dispatch)=>{
        try{ let eventRefs = db.collection('events') 
            let snap = await eventRefs.where('attendees','array-contains',user.uid).get()
            const someEvents=[]
            snap.forEach(doc=>someEvents.push({id:doc.id,...doc.data()}))
            dispatch(setEvents(someEvents)) 
           }  
        catch(err){
            console.log('error getting calendar events',err)
        }
    }
}

export const newEvent = (user,event)=>{
    return async(dispatch)=>{
        try{
            const newThing = await db.collection('events').add({
                title:event.title,
                    start:event.date.valueOf(),
                    attendees:[user.uid],
            })
           const id =newThing.id
           await db.collection('events').doc(id).set({
            title:event.title,
            start:event.date.valueOf(),
            attendees:[user.uid],
            id:id
           })
            const snap=await db.collection('events').doc(id).get();
            const calendarEvent=snap.data()
            console.log('let hope this has an id',calendarEvent)
             dispatch(createEvent(calendarEvent))

        }
        catch(err){
            console.log('Error creating event',err)
        }
    }
}


export const changeEvent=(user,event)=>{
    return async(dispatch)=>{
        try{
            console.log('grapes',event)
            let data={
                attendees:[user.uid],
                title:event.title,
                start:event.date.valueOf(),
                id:event.id
            }
            await db.collection('events').doc(event.id).set(data,{merge:true})
            console.log('does out promise finish?')
            const snap = await db.collection('events').doc(event.id).get();
            const updatedEvent = snap.data()
            dispatch(updateEvent(updatedEvent))

        }
        catch(err){
            console.log('Problem updating your event',err)
        }
    }
}



export default (state=[],action)=>{ //eventually want to get rid of repetative code for create and update
    switch(action.type){
        case SET_EVENTS:
            return action.events
        case CREATE_EVENT:
            return [...state,action.event]
        case UPDATE_EVENT:
            return state.map(event => {
                if (
                  event.id === action.event.id
                  
                ) {
                  return action.event
                } else {
                  return event
                }
              })
        default:
            return state
    }
}