import React, { Component } from 'react';
import Axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
        // const displayPosts = this.state.posts.map((x) => {
        //     return (<p key={x.id}> {x.title} </p>)
        // });
        const title = this.state.posts.map((x) => {
            return (<Tab key={x.id}> {x.id} </Tab>)
        });
        const text = this.state.posts.map((x) => {
            return (<TabPanel key={x.id}> {x.title} </TabPanel>)
        });

        const displayPosts = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                    {title}
                </TabList>
                {text}
            </Tabs>
        );

        return (
            <div>
                <h2 style={this.h2style}>About Gaur Associates</h2>
                {displayPosts}
            </div>
        );
    }
}
export default Posts;
