import React, {Component} from 'react';
import PostServise from "../../Servises/PostServise";
import Post from "./Post";
import {Route, Switch, withRouter} from "react-router-dom";
import PostInfo from "./PostInfo";

class AllPosts extends Component {

    state = {
        posts: [],
    }

    PostServise = new PostServise();

    async componentDidMount() {
        let posts = await this.PostServise.posts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props
        return (
            <div>
                {
                    posts.map(value=> {
                        if(value.id <= 10){
                            return <Post item={value}/>
                        }
                    })
                }

                <hr />
                <Switch>
                    <Route exact path={`${url}/:id`} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <PostInfo postId={id} key={id}/>
                    }}/>
                </Switch>
                <hr />
            </div>
        );
    }
}

export default withRouter(AllPosts);
