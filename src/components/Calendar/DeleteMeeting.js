import React from 'react'
import swal from '@sweetalert/with-react'
import {connect} from 'react-redux'
import {deleteMeeting,changeEvent} from '../../store/events'

class DeleteMeeting extends React.Component{
    constructor(props){
        super(props)

    this.deleteMeeting=this.deleteMeeting.bind(this)
    this.addMeeting=this.addMeeting.bind(this)
    }

    deleteMeeting(){
        console.log('slime',this.props)
        swal({
         title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this meeting!",
        icon: "warning",
        buttons: {
          cancel:true,
          confirm:{
            text:'delete',
            value:this.props.meeting
          }
        },
        }).then(value=>{
                  this.props.removeMeeting(value)
                swal({
                  title:'Meeting request deleted',
                  icon:'success'
                })
            
        })
    }

    addMeeting(){
        this.props.updateMeetingStatus(this.props.meeting)
    }

    render(){
        if(this.props.host){
        return(<button type='button' onClick={this.deleteMeeting}>delete</button>)}
        else{
            return <div><button type='button' onClick ={this.addMeeting}>Accept</button> <button type='button' onClick={this.deleteMeeting}> Decline</button></div>
        }
    }
}

const mapDispatch =(dispatch)=>({
    removeMeeting:(event)=>dispatch(deleteMeeting(event)),
    updateMeetingStatus:(event)=>dispatch(changeEvent(event))
})

export default connect(null,mapDispatch)(DeleteMeeting)