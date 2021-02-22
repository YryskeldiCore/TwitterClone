import React, {Component} from 'react';
import './post-status-filter.css';
// import {Button} from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'liked', label: 'Liked'}
        ]
    }

    render(){
        const btns = this.buttons.map(({name, label}) => {

            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info': 'btn-outline-secondary';

            return( 
                <button 
                    key={name} 
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        });

        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }
}

