import React, {Component} from 'react';
import CommentServise from "../../Servises/CommentServise";
import Comment from "./Comment";
import {withRouter} from "react-router-dom";

class AllComments extends Component {

    state = {
        comments: [],
    }
    CommentServise = new CommentServise();

    async componentDidMount() {
        let comments = await this.CommentServise.comment();
        this.setState({comments: comments})
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(post=> {
                        if(post.id <= 10) return <Comment asd={post}/>
                    })
                }
            </div>
        );
    }
}

export default withRouter(AllComments);
