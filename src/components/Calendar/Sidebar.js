import React from 'react'
import './sidebar.css'
import {fetchMeetings} from '../../store/meetings'
import {fetchUpcomingMeetings} from '../../store/upcomingMeetings'
import {connect} from 'react-redux'
import DeleteMeeting from './DeleteMeeting'

class Sidebar extends React.Component{
    constructor(){
        super()
    }


    componentDidMount(){
        this.props.pendingMeetings(this.props.user)
        this.props.upcomingMeetings(this.props.user)
    }


    render(){
        const upcoming = this.props.upcoming
        const meetings = this.props.meetings
        console.log('lime',meetings)
        const user=this.props.user
        return( <section className="sidebar">
        <div className="sidebar-header">
          <h3>
            Meetings
          </h3>
        </div>
        <div className='meeting-section'>
        <div className='meeting-list'>
        <h5>UPCOMING</h5>
        {upcoming.map(meeting=> meeting.inviteFirst ? <div>{meeting.title}<br/>attendee(s): {meeting.host},{meeting.invite? meeting.inviteFirst.firstName:''} <button type='button' id='start-call-button'>Start Meeting</button><button type='button'>Reschedule</button><button type='button'>Cancel</button></div>:<div>{meeting.title}<br/>attendee(s): {meeting.host}</div>)}
        </div>
        <div>
        <h5 className='meeting-list'>PENDING</h5>
        {meetings.map(meeting=>{if(meeting.host=== (user.uid)) {return <div className='meeting'>{meeting.title} <DeleteMeeting meeting={meeting} host={meeting.host}/> </div>} 
        else{return <div className='meeting'>{meeting.title} <DeleteMeeting meeting={meeting}/></div>}})}
        </div>
        </div>
      </section>)
    }
}

const mapState = (state) =>({
    meetings:state.meetings,
    user:state.user,
    upcoming:state.upcomingMeetings
})

const mapDispatch = (dispatch)=>({
    pendingMeetings:(user) => dispatch(fetchMeetings(user)),
    upcomingMeetings:(user)=>dispatch(fetchUpcomingMeetings(user))
})


export default connect(mapState,mapDispatch)(Sidebar)