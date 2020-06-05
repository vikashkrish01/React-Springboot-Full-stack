import React, { useEffect, useCallback } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default function MaterialTableDemo(props) {
  const {todos} = props;  
  console.log('hurray',todos);
  const [state, setState] = React.useState({
    columns: [
      { title: 'Topic', field: 'topic' },
      { title: 'Start Date', field: 'startDate' , type: 'date'},
      { title: 'End Date', field: 'endDate', type: 'date' },
      {
        title: 'Level', field: 'level', type: 'numeric'
      },
      {
        title: 'Comments', field: 'comments' 
      }
    ],
    data: []
    
  });

  const dataNeeded =useCallback(()=> todos.map((row,index)=>{
      return  row;
  }),[todos]);

  useEffect(()=>{
     setState({
         ...state,
         data: dataNeeded()
     })
  }, [dataNeeded])

  const onAddApi= (addData)=>{
    axios.post('http://localhost:8081/todo/jpa/worklist/addTodo', addData)
    .then((response)=>{
      console.log(response);
      dataNeeded();
      response && setState((prevState) => {
        const data = [...prevState.data];
        data.push(addData);
        return { ...prevState, data };
      });
    })
  }

  const onUpdateApi = (newData, oldData) =>{
    // let config = {
    //   headers: {'Access-Control-Allow-Origin': '*',
    //              'Content-Type': 'application/json'
    //           }
    //  };
    axios.put(`http://localhost:8081/todo/jpa/worklist/editTodo/${oldData.tableData.id}`, newData)
    .then((response)=>{
      console.log(response);
      dataNeeded();
      response &&  oldData &&
        setState((prevState) => {
          const data = [...prevState.data];
          data[data.indexOf(oldData)] = newData;
          return { ...prevState, data };
        });
    })
  }

  const onDeleteApi= (oldData)=>{
    axios.delete(`http://localhost:8081/todo/jpa/worklist/deleteTodo/${oldData.tableData.id}`, oldData)
    .then((response)=>{
      console.log(response);
      dataNeeded();
      response &&  setState((prevState) => {
        const data = [...prevState.data];
        data.splice(data.indexOf(oldData), 1);
        return { ...prevState, data };
      });
    })
  }

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(onAddApi(newData));
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(onUpdateApi(newData, oldData));
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(onDeleteApi(oldData));
            }, 600);
          }),
      }}
    />
  );
}