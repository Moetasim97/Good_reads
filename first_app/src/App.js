import './App.css';
import React from 'react';
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal"
  


class App extends React.Component {
  constructor(){
    super()
    this.state={modalState:false,components_array:{Currently:[],Want:[],Read:[]}}
  }


  
  componentDidMount(){

    
    
    
}

  render(){
    
   console.log(this.state)
   
    
      
      return (
     

         <>

         <div className="App">
           <header className="App-header title_font">
             {this.props.admin}'s Reads
           </header>
           <div className='book_container p-4 border'>
             <div className="section_title title_font">
               Currently Reading
             </div>
           </div>
           <div className='book_container  p-4 border'>
             <div className="section_title title_font">
               Want To Read
             </div>
           </div>
           <div className='book_container p-4 border'>
             <div className="section_title title_font">
               Read
             </div>

           </div>

           <Modal  state={this.state.modalState}/>
           
                    
         </div></>
      ) 
    }
    
  
  
}



export default App;
