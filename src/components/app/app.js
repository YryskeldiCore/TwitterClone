import React, {Component} from 'react';
import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import nextId from "react-id-generator";

export default class App extends Component {
    constructor(props){
        super(props);
        this.existPostId1 = this.randomId();
        this.existPostId2 = this.randomId();
        this.existPostId3 = this.randomId();
        this.state = {
            data : [                                    // Virtual DB on min))
                {postname: "Learning React", important: false, liked: false, id: this.existPostId1},
                {postname: "Learning Vue", important: false, liked: false, id: this.existPostId2},
                {postname: "Learning Node.js", important: false, liked: false, id: this.existPostId3}
            ],
            term: '',
            filter: 'all'
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.randomId = this.randomId.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    randomId() {
        let result = '';
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        const maxPosition = words.length - 1;
            for(let i = 0; i < 5; ++i ) {
                let position = Math.floor ( Math.random() * maxPosition );
                result = result + words.substring(position, position + 1);
            }
        return result;
    }

    onDelete(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
    
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
    
            return {
                data: newArr
            }
        })
    }

    onAdd(body){
        // this.htmlId = nextId();
        const postId = this.randomId();
        const newItem = {
            postname: body,
            important: false,
            liked: false,
            id: postId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }


    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id),
                  oldItem = data[index],
                  newItem = {...oldItem, liked: !oldItem.liked},
                  newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.postname.indexOf(term) > -1
        });
    }
    
    onUpdateSearch(term){
        this.setState({term})
    }

    filterPosts(items, filter){
        if(filter === 'liked'){
            return items.filter(item => item.liked)
        } else {
            return items
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    render(){

        const {data, term, filter} = this.state;

        const Liked = data.filter(item => item.liked).length;
        const All = data.length;

        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader Liked={Liked} allPosts={All}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    propsData={visiblePosts}
                    onDelete={this.onDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm 
                    onAdd={this.onAdd}/>
            </div>
        )
    }
}
