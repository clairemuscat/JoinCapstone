import React from 'react'




class UpdateProfile extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:this.props.profile.firstName
        }
    }

    firstNameChange(){
        let first = e.target.value
        
     
        this.setState({
          firstName:first
        });
        swal.setActionValue({
            confirm: { value:{firstName:first}  }
          });
    }

    render(){
        return(
            <form>
                <label> first Name</label>
                <input
                name='firstName'
                value={this.state.firstName}
                onChange={this.firstNameChange}
                />
            </form>
        )
    }
}


export default UpdateProfile