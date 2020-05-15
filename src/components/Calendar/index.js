import React,{useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import './main.scss' // webpack must be configured to do this


function Calendar(props){
const [calendarWeekends,setCalendarWeekends] = useState(true)
const[calendarEvents,setCalendarEvents]=useState([{title: "Event Now", start: new Date()}])
  const calendarComponentRef = React.createRef()


 
    return (
      <div className="demo-app-calendar">
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        ref={calendarComponentRef}
        weekends={calendarWeekends}
        events={calendarEvents}
        // dateClick={this.handleDateClick}
      />
      </div>
    )


}

// function Calendar(props) {
//   return <div>A Calendar will be here at some point</div>;
// }

export default Calendar;
