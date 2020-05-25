import React from 'react'
import { addMeeting} from '../store/meetings'
import {connect} from 'react-redux'
import swal from '@sweetalert/with-react'
import MyInput from './Calendar/MyInput'



class AddCalendarEvent extends React.Component{
    constructor(){
        super()
        this.state={
            redirect:'/account/calendar'
        }
        this.addCalendarEvent=this.addCalendarEvent.bind(this)
    }

addCalendarEvent(){
    
    swal({
        title:"Create Event",
        content:<MyInput/>,
        buttons:{
          cancel:true,
          confirm:'Add Event'
        }
      }).then(val=>{
          this.props.makeAppointment(this.props.match,this.props.user,val.value)
      })
}
    render(){
        return(
        <div>
            <button type='button'   id="meeting-button" className="button" onClick={this.addCalendarEvent}>Schedule A Call</button>
        </div>)
    }
}


const mapDispatch=(dispatch)=>({
    makeAppointment:(match,user,event)=>dispatch(addMeeting(match,user,event))
})


export default connect(null,mapDispatch)(AddCalendarEvent)