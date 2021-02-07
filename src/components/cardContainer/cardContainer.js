import React, { Component } from "react";
import CardList from "../cardLists";
import CardForm from "../form";
import axios from "axios";

class cardContainer extends Component {
  state = {
    Users: [],
    loading: false,
    error: "",
  };

  inutRef = React.createRef();
  // inputOnChange = (value) => {
  //   this.setState({
  //     ...this.state,
  //     name: value,
  //   });
  // };

  handleSubmitForm = async (event) => {
    event.preventDefault();

    this.setState({ ...this.state, loading: true });
    try {
      await axios
        .get(`https://api.github.com/users/${this.inutRef.current.value}`)
        .then((response) => {
          console.log(this);
          this.setState((prevState) => ({
            ...this.state,
            Users: [...prevState.Users, response.data],
            error: "",
            loading:false
          }));
        })
        .catch((error) => {
          if (error.response) {
           this.setState({
             ...this.state,
             error:`${error.config.url} Not Found`,
             loading:false
           })
          }else if(error.request){
             throw Error('request was not Found');
          }
          else{
            throw Error('Network Disconnected');
          }
        });
    }
    catch(err){
      console.log(err)
    }
    this.inutRef.current.value=""
  }

  render() {
    let child;

    if (this.state.error) {
      child = (
        <div>
          <b>{this.state.error}</b>
        </div>
      );
    } else {
      child = (
        <>
          {this.state.loading ? (
            <div>Loading</div>
          ) : (
            <CardList {...this.state} />
          )}
        </>
      );
    }

    return (
      <>
        <CardForm
          onFormSubmit={this.handleSubmitForm}
          ref={this.inutRef}
          // onChangeInput={this.inputOnChange}
          {...this.state}
        />
        {child}
      </>
    );
  }
}

export default cardContainer;
