import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeValue(e){
        const val = e.target.value;
        this.setState({
            value: val
        })
    }

    onSubmit(e){
        const input = document.querySelector('.new-post-label');
        e.preventDefault();
        if(!this.state.value){
            input.style.cssText = `
                border: 1px solid red;
                box-shadow: 2px 2px 4px 2px;
            `;
            input.setAttribute('placeholder', 'Не оставляйте поле пустым!');
            return 0
        } else {
            this.props.onAdd(this.state.value);
            this.setState({
                value: ''
            })
            const val = input.getAttribute('placeholder');
            if(val){
                input.setAttribute('placeholder', 'О чем вы думаете сейчас ?');
            }
            input.style.cssText = `
                border: none;
                box-shadow: none;
            `;
        }
        
    }

    render(){
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="О чем вы думаете сейчас ?"
                    className="form-control new-post-label"
                    onChange={this.onChangeValue}
                    value={this.state.value}/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >Add</button>
            </form>
        )
    }
}
