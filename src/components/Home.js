import React, { Component } from 'react';
import Hero from './subcomponents/Hero';
import BlogThumb from './subcomponents/BlogThumb';

import axios from 'axios';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            featured: '',
            index: 0,
            posts: [{title: "Loading...",image: 'https://unsplash.it/900/400/?random'}]
        }
    }

    componentDidMount(){
        axios.get('/api/featured').then(response => {
        this.setState({featured: response.data, index: (~~(Math.random()* response.data.length)+ 0), posts: response.data})
        }).catch(console.log)  
    }
    

    render(){
        // map over your recommended blogs here, replace null.
        const posts = this.state.posts.map((c, i)=><BlogThumb key={i} blog={c}/>)
console.log(this.state.posts,  this.state.index, "Posts here")
        return(
            <div className="content" >
                <Hero blog={this.state.posts[this.state.index]} />
                <hr/>
                <div className="blog-grid">
                    {posts}
                </div>
            </div>
        )
    }
}

export default Home;