import React from 'react'
import './sidebar.css'
import {fetchMeetings} from '../../store/meetings'
import {connect} from 'react-redux'

class Sidebar extends React.Component{
    constructor(){
        super()
    }


    componentDidMount(){
        this.props.pendingMeetings(this.props.user)
    }


    render(){
        const meetings = this.props.meetings
        const user=this.props.user
        console.log('mangos', this.props.meetings)
        console.log('pepper',user.uid)
        return( <section className="sidebar">
        <div className="sidebar-header">
          <h3>
            Meetings
          </h3>
        </div>
        <div className='meeting-section'>
        <div className='meeting-list'>
        <h5>UPCOMING</h5>
        <div>Hello</div>
        </div>
        <div>
        <h5 className='meeting-list'>PENDING</h5>
        {meetings.map(meeting=>{if(meeting.host=== (user.uid)) { return <div className='meeting'>{meeting.title}<button type='button'>delete</button></div>} 
        else{return <div className='meeting'>{meeting.title}<div><button type='button'>Accept</button> <button type='button'> Decline</button></div></div>}})}
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
    pendingMeetings:(user) => dispatch(fetchMeetings(user))
})


export default connect(mapState,mapDispatch)(Sidebar)