import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MyInput from './MyInput';
import swal from '@sweetalert/with-react';

import './main.scss'; // webpack must be configured to do this

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [{ title: 'Event Now', start: new Date() }],
      calendarEventsDescrptions: [],
      // displayPopup:false,
    };
    // this.handleDateClick=this.handleDateClick.bind(this)
  }

  // handleDateClick(evt){
  //   console.log(evt)
  //   console.log('calenadr state',this.state)
  //   this.setState({
  //     // add new event data
  //     calendarEvents:[...this.state.calendarEvents,{
  //       // creates a new array
  //       title: "New Event",
  //       start: evt.date,
  //       allDay: !evt.allDay
  //     }]
  //   });

  // }

  render() {
    return (
      <div id="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // ref={calendarComponentRef}
          editable={true}
          weekends={this.state.weekends}
          events={this.state.calendarEvents}
          eventClick={(info) => console.log('strawberry', info.event.id)}
          dateClick={(evt) =>
            swal({
              title: 'Create Event',
              content: <MyInput date={evt} />,
              buttons: {
                cancel: true,
                confirm: 'Add Event',
              },
            }).then((val) => {
              console.log('plums', val);
              this.setState({
                calendarEvents: [
                  ...this.state.calendarEvents,
                  {
                    title: val.value.title,
                    start: val.value.date,
                    //  allDay:val.value.date.allDay
                  },
                ],
                calendarEventsDescrptions: [
                  ...this.state.calendarEventsDescrptions,
                  { eventId: 1, eventDesciption: val.value.description },
                ],
              });
              swal({
                title: 'Event Created',
                text: 'Event: ' + val.value.title + ', was created!',
                icon: 'success',
              });
            })
          }
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
      </div>
    );
  }
}

export default Calendar;
