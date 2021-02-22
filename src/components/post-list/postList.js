import React from 'react';
import PostListItem from '../post-list-item/postListItem';
import './post-list.css';

const PostList = ({propsData, onDelete, onToggleImportant, onToggleLiked}) => {

    const elems = propsData.map((item) => {
        const {id, ...items} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...items}
                    onDelete={() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                    />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default PostList;