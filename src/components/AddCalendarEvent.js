import React from 'react'
import {newEvent} from '../store/events'
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
    console.log('bologna')
    
    swal({
        title:"Create Event",
        content:<MyInput/>,
        buttons:{
          cancel:true,
          confirm:'Add Event'
        }
      }).then(val=>{
          console.log('apples',val.value)
          console.log('sending to thunk',this.props.match,this.props.user,val.value)
          this.props.makeAppointment(this.props.match,this.props.user,val.value)
      })
}
    render(){
        return(
        <div>
            <button type='button' onClick={this.addCalendarEvent}>Schedule A Call</button>
        </div>)
    }
}
// const mapState =(state)=>({
//     events:state.calendar
// })

const mapDispatch=(dispatch)=>({
    makeAppointment:(match,user,event)=>dispatch(newEvent(match,user,event))
})


export default connect(null,mapDispatch)(AddCalendarEvent)