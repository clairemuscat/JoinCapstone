import React,{Component} from 'react'
// import ReactDOM from 'react-dom'
// import swal from '@sweetalert/with-react'

// const DEFAULT_INPUT_TEXT = "";
 
class MyInput extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      eventTitle: '',
      eventDescription:''
    };
    this.changeText=this.changeText.bind(this)
    this.changeDescription=this.changeDescription.bind(this)
  }
 
  changeText(e) {
    let title = e.target.value
    
 
    this.setState({
      eventTitle:title
    });
    swal.setActionValue({
        confirm: { value: title }
      });

}

changeDescription(e){
    let description = e.target.value
    let title=this.state.eventTitle
    let date=this.props.date.date
 
    this.setState({
      eventDescription:description
    });

    swal.setActionValue({
        confirm: { 
            value: {description:description,
            title:title,
            date:date}
    }});
}
 
  render() {
    return (
        <form id='event-form'>
            <label>Title: </label>
      <input
      type='text'
        value={this.state.eventTitle}
        name='title'
        onChange={this.changeText}
    /><br/> 
    <br/>
    <label>Date: </label>
    <input 
        type='datetime' name='dateTime'
        value={this.props.date.date}
        />
        <br/>
        <br/>
        <label>
            Description:
        </label>
        <input
        type='text'
        value={this.state.eventDescription}
        name='description'
        onChange={this.changeDescription}
        /><br/>
        <br/>
        <div id='attendee'>
         Attendee(s): Brian
     </div>
     </form>
     
    )}
}
 


export default MyInput