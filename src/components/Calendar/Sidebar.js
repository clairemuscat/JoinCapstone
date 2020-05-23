import React from 'react'
import './sidebar.css'

class Sidebar extends React.Component{



    render(){
        return( <section className="sidebar">
        <div className="sidebar-header">
          <h3>
            Meetings
          </h3>
        </div>
        <h5>Upcoming</h5>
        <div>Hello</div>
        <h5>Pending</h5>
        <div>Goodbye</div>
      </section>)
    }
}


export default Sidebar