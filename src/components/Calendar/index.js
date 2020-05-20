import React,{useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import MyInput from './MyInput'
import UpdateEvent from './UpdateEvent'
import swal from '@sweetalert/with-react'
import {connect} from 'react-redux'
import  {fetchEvents,newEvent,changeEvent,deleteEvent} from '../../store/events'


import './main.scss' // webpack must be configured to do this



class Calendar extends React.Component{
  constructor(props){
    super(props)
 
  }

 componentDidMount(){
  this.props.getCalendar(this.props.user)
 }

 render(){
   return(
    <FullCalendar
      defaultView="timeGridWeek"
      header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      // ref={calendarComponentRef}
      editable={true}
      weekends={true}
      events={this.props.events}
      eventClick={(info)=>{
        swal({
        title:info.event.title,
        content: <UpdateEvent event={info.event} user={this.props.user} update={this.props.updateEvent}/>,
        buttons:{
          cancel:true,
         confirm:{
           text:'delete',
           value:info,}
        }
      }).then(info =>{
        swal({  title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this event!",
        icon: "warning",
        buttons: {
          cancel:true,
          delete:{
            value:info
          }
        },
        dangerMode: true,}). 
        then((value)=>{
          if(value){
            this.props.removeEvent(value.event)
          swal({
            title:'Event Deleted',
            icon:'success'
          })
          }
        })
      })}}

      dateClick={(evt)=>  swal({
        title:"Create Event",
        content:<MyInput date={evt} />,
        buttons:{
          cancel:true,
          confirm:'Add Event'
        }
      })
   .then(val=>{
    this.props.addEvent(this.props.user,val.value)
    swal({
      title:'Event Created',
      text:'Event: ' + val.value.title + ', was created!',
      icon:'success'
    })
  })}

      // selectable={true}
      // selectOverlap={false}
      // selectMirror={true}
      // businessHours={[ // specify an array instead
      //   {
      //     daysOfWeek: [0, 1, 2, 3,6  ], // Monday, Tuesday, Wednesday
      //     startTime: '08:00', // 8am
      //     endTime: '18:00' // 6pm
      //   },
      //   {
      //     daysOfWeek: [ 4, 5 ], // Thursday, Friday
      //     startTime: '10:00', // 10am
      //     endTime: '16:00' // 4pm
      //   }
      // ]}
    />
  
  )}

}
const mapDispatch=(dispatch)=>({
  getCalendar: (user)=>dispatch(fetchEvents(user)),
  addEvent:(user,event)=>dispatch(newEvent(user,event)),
  updateEvent:(user,event)=>dispatch(changeEvent(user,event)),
  removeEvent:(event)=>dispatch(deleteEvent(event))
})
const mapState=(state)=>({
  user:state.user,
  events:state.calendar
})

export default connect(mapState,mapDispatch)(Calendar)


// export default Calendar

