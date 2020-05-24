import React from 'react'
import './sidebar.css'
import {fetchMeetings,fetchUpcomingMeetings} from '../../store/meetings'
import {connect} from 'react-redux'
import DeleteMeeting from './DeleteMeeting'

class Sidebar extends React.Component{
    constructor(){
        super()
    }


    componentDidMount(){
        this.props.pendingMeetings(this.props.user)
        // this.props.upcomingMeetings(this.props.user)
    }


    render(){
        const meetings = this.props.meetings
        console.log('hot', this.props.user)
        const user=this.props.user
        console.log('mangos', this.props.meetings)
        console.log('pepper',user.uid)
        return( <section className="sidebar">
        <div className="sidebar-header">
          <h3>
            Hello
          </h3>
        </div>
        <div className='meeting-section'>
        <div className='meeting-list'>
        <h5>UPCOMING</h5>
        <div>Hello</div>
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
    user:state.user
})

const mapDispatch = (dispatch)=>({
    pendingMeetings:(user) => dispatch(fetchMeetings(user)),
    // upcomingMeetings:(user)=>dispatch(fetchUpcomingMeetings(user))
})


export default connect(mapState,mapDispatch)(Sidebar)