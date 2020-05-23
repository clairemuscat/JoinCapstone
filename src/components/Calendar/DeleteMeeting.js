import React from 'react'
import swal from '@sweetalert/with-react'
import {connect} from 'react-redux'
import {deleteMeeting} from '../../store/meetings'

class DeleteMeeting extends React.Component{
    constructor(props){
        super(props)

    this.deleteEvent=this.deleteEvent.bind(this)
    }

    deleteEvent(){
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
                  title:'Meeting Request Deleted',
                  icon:'success'
                })
            
        })
    }

    render(){
        return(<button type='button' onClick={this.deleteEvent}>delete</button>) 
    }
}

const mapDispatch =(dispatch)=>({
    removeMeeting:(event)=>dispatch(deleteMeeting(event))
})

export default connect(null,mapDispatch)(DeleteMeeting)