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
        const user=this.props.user
        upcoming.filter(meeting=> meeting.start = new Date(meeting.start).toUTCString())
        meetings.filter(meeting=> meeting.start = new Date(meeting.start).toUTCString())
        
        return( <section className="sidebar">
        <div className="sidebar-header">
          <h1>
            Meetings
          </h1>
        </div>
        <div className='meeting-section'>
        <div className='meeting-list'>
        <h3>UPCOMING</h3>
    {upcoming===[] ?'No Updoming Meetings': upcoming.map(meeting => meeting.inviteFirst ? <div className='upcoming-meeting'><div className='meeting-content'>Title: {meeting.title}<br/> Time: {meeting.start}<br/>attendee(s): {meeting.host},{meeting.inviteFirst} {meeting.inviteLast} </div><br/> <div className='meeting-buttons'> <button type='button' id='start-call-button'>Start Meeting</button><button type='button'>Reschedule</button><button type='button' className='delete-button' >Cancel</button></div></div>:<div>{meeting.title} @ {meeting.start}<br/>attendee(s): {meeting.host}</div>)}
        </div>
        <div>
        <h3 className='meeting-list'>PENDING</h3>
        { meetings.map(meeting=>{if(meeting.hostId===user.uid){ return <div className='meeting'>< div className='meeting-content'>Title: {meeting.title}<br/> Time: {meeting.start} <br/> Invitation:{meeting.inviteFirst} {meeting.inviteLast}</div><br/><DeleteMeeting meeting={meeting} host={meeting.host} user={user}/> </div>} 
        else{return <div className='meeting'> <div className='meeting-content'>Title: {meeting.title}<br/> Time: {meeting.start} <br/>invite request: {meeting.inviteFirst} {meeting.inviteLast}</div><br/><DeleteMeeting meeting={meeting} user={user}/></div>}})}
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