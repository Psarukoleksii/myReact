import React, {Component} from 'react';
import PostServise from "../../Servises/PostServise";

class PostInfo extends Component {

    state = {
        post: null,
    }

    PostServise = new PostServise();

    async componentDidMount() {
        let {postId} = this.props;
        const post = await this.PostServise.getOnePost(postId);
        this.setState({post})
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id}-{post.title}-{post.body}</div>}
            </div>
        );
    }
}

export default PostInfo;
