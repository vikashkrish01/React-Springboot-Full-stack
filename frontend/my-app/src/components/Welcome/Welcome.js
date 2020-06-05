import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Welcome extends Component {

    componentDidMount(){
        let config = {
            headers: {'Access-Control-Allow-Origin': '*',
                       'Content-Type': 'application/json'
                    }
        };
        axios.get(`http://localhost:8081/todo/jpa/welcome/${this.props.match.params.name}`,config)
        .then((response) => console.log(response));
    }

    render() {
        return (
            <div>
                Welcome : {this.props.match.params.name}. To go to my work :
                <Link to="/worklist">Press here</Link>   
            </div>
        );
    }
}

export default Welcome;