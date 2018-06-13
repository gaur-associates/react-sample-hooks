import React, { Component } from 'react';
import Axios from 'axios';

class Posts extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                let posts = response.data.slice(0, 5);
                this.setState({
                    posts: posts
                })
            })
            .catch(error => {
                console.error(error);
            })
    }

    h2style = {
        color: 'blue',
        fontSize: 'x-large',
        textAlign: 'center',

    }

    render() {
        const displayPosts = this.state.posts.map((x) => {
            return (<p key={x.id}> {x.title} </p>)
        });

        return (
            <div>
                <h2 style={this.h2style}>About Gaur Associates</h2>
                {displayPosts}
            </div>
        );
    }
}
export default Posts;
