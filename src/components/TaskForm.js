import React, { Component } from 'react';
import '../styles/validateform.css'

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state={title:"",
                    email: "",
                    emailErrorMessage:"",
                    titleErrorMessage:"",
                    submitted:false,
                }

    }
    validateForm=(name,value)=>{
  
        if(name==="title"){
           
            if(typeof(value)==='string'){
                
                if(value.length>=8){
                    
                    return true;
                }else{
                    
                    return false;
                }
            }else{
                return false;
            }

        }else if(name==="email"){

            if(typeof(value)==='string'){
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(value);
            }else{
                return false;
            }


        }


    }

    handleChange = (e)=>{
      this.setState( {[e.target.name]: e.target.value} );
      //,()=>this.validateForm()
      if(!this.validateForm(e.target.name,e.target.value)){
          if(e.target.name === "title"){
            this.setState({ titleErrorMessage: "Name Vaidation errors here" });
            this.props.addTask({titleErrorMessage:this.state.titleErrorMessage });
       

          }else if(e.target.name === "email"){
             this.setState({ emailErrorMessage: "Email Vaidation errors here" });
             this.props.addTask({ emailErrorMessage:this.state.emailErrorMessage });
       
          }

      }else{

        if(e.target.name === "title"){
            this.setState({ titleErrorMessage: "" });
            this.props.addTask({titleErrorMessage:this.state.titleErrorMessage });
       

          }else if(e.target.name === "email"){
             this.setState({ emailErrorMessage: "" });
             this.props.addTask({ emailErrorMessage:this.state.emailErrorMessage });
       
          }



      }

      }
      


    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask({title: this.state.title,email:this.state.email,submitted:true });
        this.setState({ title: "" });
        this.setState({ email: "" });
    }



    render() {

        const displaySubmitButton=()=>{
            console.log("kkkk"+this.state.emailErrorMessage);
            if(this.state.emailErrorMessage !=="" ||this.state.titleErrorMessage!== ""){
               
                return <input className="buttonstyle" type="submit" disabled/>


            }else if(this.state.emailErrorMessage ==="" && this.state.titleErrorMessage=== "" && this.state.title==="" && this.state.email===""){

                return <input className="buttonstyle" type="submit" disabled/>
            }else if(this.state.emailErrorMessage ==="" && this.state.titleErrorMessage=== "" && (this.state.title==="" || this.state.email==="")){
                return <input className="buttonstyle" type="submit" disabled/>
            }else{
                return <input className="buttonstyle" type="submit" />
            }
        }


        return (
           <div className="formdiv"> 
                <form  onSubmit={this.handleSubmit}>
                <div className="inputdiv">
                    <div>
                    <label>Name :</label>
                    <input className="inputstyle" type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    </div>
                    <div className="errorlabel"><label>{this.state.titleErrorMessage}</label></div>
                </div>
                <div className="inputdiv">
                   <div>
                    <label>Email : </label>
                    <input className="inputstyle" type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                   </div> 
                    <div className="errorlabel"><label >{this.state.emailErrorMessage}</label></div>
                </div>
                <div >
                    {displaySubmitButton()}
                </div>
                </form>
           </div>
        );
    }
}

export default TaskForm;
