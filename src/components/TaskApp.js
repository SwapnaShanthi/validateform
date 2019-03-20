
import React, { Component } from 'react';
import TaskForm from './TaskForm';

class TaskApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            title:"",
            email:"",
            emailErrorMessage:"",
            titleErrorMessage:"",
            submitted:false
        }
    }
    

    addTask = (newTask) => {

        this.setState({title:newTask.title});
        this.setState({email:newTask.email});
        this.setState({submitted:newTask.submitted});
        this.setState({emailErrorMessage:newTask.emailErrorMessage});
        this.setState({titleErrorMessage:newTask.titleErrorMessage});


        this.setState({
            tasks: [...this.state.tasks, newTask]

        })
    }

    render() {
         const display=()=>{
             if(this.state.submitted){

                return <div>Thanks!</div>
             }else{

                 return <div><TaskForm  addTask={this.addTask} /></div>
             }




         }



        return (
            <div>
            <h1>Validate Form </h1>
              {display()}
            
        </div>
           
        )
    }
}

export default TaskApp;
