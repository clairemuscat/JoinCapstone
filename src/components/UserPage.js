import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import UserMandatory from './UserMandatory'

const UserPage = (props) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [picture, setPicture] = useState("");
  // Second Page
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
}

class NewStudent extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await axios.post('api/students', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa: this.state.gpa
    })
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      gpa: ''
    })
  }

  render() {
    return (
      <div>
        <NewStudentForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default NewStudent;