import React, {Component} from 'react';
import CommentServise from "../../Servises/CommentServise";

class CommentInfo extends Component {

    state = {
        comment: null,
    }

    commentServise = new CommentServise();

    async componentDidMount() {
        let {comId} = this.props;
        let comment = await this.commentServise.getOneComment(comId);
        this.setState({comment})
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {
                    comment && <div>{comment.id} - {comment.name} - {comment.email} - {comment.body}</div>
                }
            </div>
        );
    }
}

export default CommentInfo;
