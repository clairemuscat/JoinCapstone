import React,{useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import MyInput from './MyInput'
import UpdateEvent from './UpdateEvent'
import swal from '@sweetalert/with-react'

import './main.scss' // webpack must be configured to do this



class Calendar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      calendarWeekends:true,
      calendarEvents:[{title: "Event Now", start: new Date()}],
    
    }
 
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
      weekends={this.state.weekends}
      events={this.state.calendarEvents}
      eventClick={(info)=>{
        console.log('limes',info.event)
        swal({
        title:info.event.title,
        content: <UpdateEvent event={info}/>,
        buttons:{
          cancel:true,
          delete:{
            text:'delete',
            value:'delete'
          },
          confirm:'Update Event'
        }
      })}}
      dateClick={(evt)=>  swal({
        title:"Create Event",
        content:<MyInput date={evt}/>,
        buttons:{
          cancel:true,
          confirm:'Add Event'
        }

      })
   .then(val=>{
     console.log('oranges',val)
     this.setState({calendarEvents:[...this.state.calendarEvents,{
       title: val.value.title,
       start:val.value.date,
      //  allDay:val.value.date.allDay
     }]})
    // calendarEventsDescrptions:[...this.state.calendarEventsDescrptions,{eventId:1,eventDesciption:val.value.description}]})
    // console.log('pineapples',this.state)
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



export default Calendar


