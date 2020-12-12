import React, {Component} from 'react';
import './Post.css'

class Post extends Component {
    render() {
        let {xxx} = this.props;
        return (
            <div className={'allPosts'}>
                <div className={'post'}>
                    <h3>{xxx.id} - {xxx.title}</h3>
                    <br/>
                    {xxx.body}
                </div>
            </div>
        );
    }
}

export default Post;
