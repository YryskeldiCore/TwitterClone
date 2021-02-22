import React, {Component} from 'react';
import './post-list-item.css';
import styled from 'styled-components'; // styled components included

const PostItem = styled.div` 
    display: flex;
    justify-content: space-between;
`; // elem which contains styles of DIV 

export default class PostListItem extends Component {
    render(){

        const {postname, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;

        let classNames = 'app-list-item';

        if(important){
            classNames += ' important';
        }

        if(liked){
            classNames += ' like';
        }

        return (
            <PostItem className={classNames}>
                <span 
                    onClick={onToggleLiked}
                    className="app-list-item-label">
                    {postname}</span>
                <div className="d-flex justify-content-center">
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash"></i>
                    </button>
                    <button 
                        type="button"
                        onClick={onToggleImportant} 
                        className="btn-star btn-sm">
                            <i className="fa fa-star"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </PostItem>
        )
    }
}