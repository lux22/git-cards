import React, { Component } from "react";
import "./from.css";

const Form = React.forwardRef((props,ref)=>(
  <form action="" onSubmit={event=>props.onFormSubmit(event)}>
        <div className="card-form-container">
          <input
            type="text"
            placeholder="Add Git User"
            ref={ref}
            // value={this.props.name}
            // onChange={event=>this.props.onChangeInput(event.target.value)}
          ></input>
          <button>Add User</button>
        </div>
  </form>
))

export default Form;
