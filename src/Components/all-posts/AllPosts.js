import React, {Component} from 'react';
import Post from "./Post";
import PostServise from "../../Servises/PostServise";

class AllPosts extends Component {

    state = {posts: []}

    PostServise = new PostServise()

    async componentDidMount() {
        let posts = await this.PostServise.posts();
        this.setState({posts: posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(post =>{
                        if(post.id <= 10) return (<Post xxx={post} key={post.id}/>)
                    })
                }
            </div>
        );
    }
}

export default AllPosts;
