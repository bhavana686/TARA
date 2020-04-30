import React, { Component } from 'react';
import axios from "axios";
import "../components/css/projectmainpage.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

// import TabPanel from "./TabPanel";
import Env from "../helpers/Env";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Constants from "../helpers/Constants";




class Projectmainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectid : this.props.match.params.id,
            projectdetails:"",

        }
  

    }
    async componentDidMount() {
        console.log("the project_id is",this.state.projectid)
        await axios.get(Env.host +'/project-create/project_by_id/?projectid='+this.state.projectid).then(response =>
           {
                console.log(response.data)
                this.setState({
                   projectdetails:response.data
                })
          })
         
    }
      
    render() {
       // let projects = this.state.projectdetails.map((project) => {
           let  project= (
                <div>
              
                <div class="col-md-12" >
                     <div class="card" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"200px", width:"1100px"}}>
                    
                    <div class="col-md-1"></div>
                     <div class="col-md-9" style={{marginTop:"10px"}}>
                     <div style={{ "font-size": "15px", }}>  
                     </div>
                        <h1><b>MONEY HEIST</b></h1>
                       </div>
                     </div>
                     </div>
                     
                       </div>
     
                  )
                
               
       
                              
        return (
        <div>
         <div class="row">
         <div class="col-md-1"></div>

             <div><h1> </h1></div>
         </div>
               <div class="row" style={{}}>
                  
                   <div class="col-md-1"></div>
                   <div class="col-md-10">
                   
                          {project}
                          
                          <div class="col-md-4" id="c1" style={{"padding-right":"20px"}}>
                          <div class="card1" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px",width:"300px" }}>
  

                         <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}> <span class="glyphicon glyphicon-user"></span><br></br>
                         <Link to="/Contactspage" style={{ color: "black" }}>Contacts</Link></div>
                     </div>
                    
                          </div>
                          <div class="col-md-4">
                          <div class="card2" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px",width:"300px"  }}>
                         
                         <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}> <span class="glyphicon glyphicon-folder-open"></span><br></br>
                         <Link to="/Documentspage" style={{ color: "black" }}>Documents</Link></div>>
                         </div>
                    
                          </div>
                          
                          
                          <div class="col-md-4">
                          <div class="card3" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px", width:"300px" }}>
                     <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}><span class="glyphicon glyphicon-calendar"></span><br></br>
                     <Link to="/Calenderpage" style={{ color: "black" }}>Calender</Link></div>

                     </div>
                    
                          </div>
                          <div class="col-md-4" style={{"padding-right":"20px"}}>
                          <div class="card4" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px",width:"300px" }}>
                         <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}><span class="glyphicon glyphicon-globe"></span><br></br>
                         <Link to={"/ProjectEvent/"+this.state.projectid} style={{ color: "black" }}>Events</Link></div>
                     </div>
                    
                          </div>
                          <div class="col-md-4">
                          <div class="card5" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px",width:"300px"  }}>
                     <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}><span class="glyphicon glyphicon-tasks"></span><br></br>
                     <Link to={"/ProjectTasks/"+this.state.projectid} style={{ color: "black" }}>Tasks</Link></div>
                     </div>
                    
                          </div>
                          
                          
                          <div class="col-md-4">
                          <div class="card6" style={{"display": "block","border-radius": "4px", "border": "1px #ddd solid","margin-top":"20px", 
                     "background-color": "#fff", height:"150px", width:"300px" }}>
                         <div style={{"text-align":"center","padding-top":"50px",fontSize:"20px"}}> <span class="glyphicon glyphicon-queen"></span><br></br>
                          <Link to="/Costumepage" style={{ color: "black" }}>Costumes</Link></div>
                       
                     </div>
                    
                          </div>
                          </div>

                      
                    
                     

                          </div>
                   </div>
                   
             
 

        );
    }
}


export default Projectmainpage;