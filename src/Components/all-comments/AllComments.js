import React, {Component} from 'react';
import CommentServise from "../../Servises/CommentServise";
import Comment from "./Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import CommentInfo from "./CommentInfo";

class AllComments extends Component {

    CommentServise = new CommentServise();

    state = {
        comments: [],
    }

    async componentDidMount() {
        let comments = await this.CommentServise.comment();
        this.setState({comments})
        console.log(comments)
    }
    render() {
        const {comments} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {
                    comments.map(comment=> {
                        if(comment.id <= 10){
                            return <Comment xxx={comment} key={comment.id}/>
                        }
                    })
                }
                <hr />
                <Switch>
                    <Route path={`${url}/:id`} render={(props)=>{
                        let {match:{params:{id}}} = props;
                        return <CommentInfo comId={id} key={id}/>
                    }}/>
                </Switch>
                <hr />
            </div>
        );
    }
}

export default withRouter(AllComments);
