import React, {Component} from 'react';
import FilmsServise from "../../Servises/FilmsServise";
import Film from "./Film";

class Films extends Component {

    FilmsServise = new FilmsServise();

    state = {
        films: [],
    }

    async componentDidMount() {
        let films = await this.FilmsServise.getFilms();
        this.setState({films})
    }

    render() {
        let {films} = this.state;
        return (
            <div>
                {
                    films.map(value=> <Film xxx={value}/>)
                }
            </div>
        );
    }
}

export default Films;
