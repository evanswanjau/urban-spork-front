import React, { Component } from "react";
import axios from "axios";
import Home from "./Pages/Home";

class App extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get(`https://urbanspork.herokuapp.com/posts/`).then((res) => {
            this.setState({ posts: res.data });
        });
    }

    render() {
        return (
            <div>
                <Home posts={this.state.posts} />
            </div>
        );
    }
}

export default App;
