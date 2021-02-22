import React from 'react';
import './app-header.css';

const AppHeader = ({Liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Yrys Amanturov</h1>
            <h2>{allPosts} записей, {Liked} понравилось</h2>
        </div>
    )
}

export default AppHeader;
