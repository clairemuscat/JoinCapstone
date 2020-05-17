import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import swal from '@sweetalert/with-react'

const DEFAULT_INPUT_TEXT = "";
 
class MyInput extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      eventTitle: DEFAULT_INPUT_TEXT,
      eventDate:this.props.date,
      eventDescription:''
    };
    this.changeText=this.changeText.bind(this)
  }
 
  changeText(e) {
    let title = e.target.title.value
    let  description= e.target.description.value
 
    this.setState({
      eventTitle,
      eventDescription
    });
 
    /*
     * This will update the value that the confirm
     * button resolves to:
     */
    swal.setActionValue({confirm:{
        title,description
    }});
  }
 
  render() {
      console.log('hitting this ')
    return (
        <form id='event-form'>
            <label>Title: </label>
      <input
        value={this.state.eventTitle}
        name='title'
        onChange={this.changeText}
    /><br/> 
    <br/>
    <label>Date: </label> 
    <input
        value={this.state.eventDate}
        name='date'
        type='date'
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
        // 
        /><br/>
        <br/>
        <div id='attendee'>
         Attendee(s): Brian
     </div>
     </form>
     
    )
  }
}
 
// We want to retrieve MyInput as a pure DOM node: 
let wrapper = document.createElement('div');
// ReactDOM.render(<MyInput />, wrapper);
let el = wrapper.firstChild;
 
swal({
  text: "Create Event",
  content: el,
  buttons: {
    confirm: {
      /*
       * We need to initialize the value of the button to
       * an empty string instead of "true":
       */
      value: 
         DEFAULT_INPUT_TEXT
        
        
    },
  },
})
.then((value) => {
  swal(`You typed: ${value}`);
});


export default MyInput