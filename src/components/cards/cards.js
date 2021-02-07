import React from 'react';
import './cards.css';

const {Component} = React;

class cards extends Component {
    render() {
        return (
            <div className="list_wrapper">
                <div className="list_flex">
                     <img src={this.props.avatar_url} alt='images'/>
                     <div>
                         <h2>{this.props.name}</h2>
                         <h4>{this.props.location}</h4>
                         <span>{this.props.bio}</span>
                    </div>               
                </div>
            </div>
        )
    }
}

export default cards;
