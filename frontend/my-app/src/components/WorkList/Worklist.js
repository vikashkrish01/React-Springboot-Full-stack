import React, { Component } from 'react';
import WorkTable from './WorkTable';
import WorkEditTable from './WorkEditTable';
import axios from 'axios';

class Worklist extends Component {

    state={
      todos: []
    }

    componentDidMount(){
        axios.get(`http://localhost:8081/todo/jpa/worklist/${this.props.match.params.name}/getAllTodos`)
        .then((response)=>{
            this.setState({
                todos: response.data
            });
        }); 
    }

    render() {
        console.log(this.state.todos);
        return (
            <>
            <div>
                <h2>To Do List</h2>
                <WorkEditTable todos={this.state.todos}/>
            </div>
            </>
        );
    }
}

export default Worklist;