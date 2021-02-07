import React from 'react';
import Cards from '../cards';

const {Component} = React;

class cardLists extends Component {
    render() {
        return (
            <div>
                {this.props.Users.map((item)=>(<Cards key={item.id} {...item}/>))}
            </div>
        )
    }
}

export default cardLists;
 