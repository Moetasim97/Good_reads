import './App.css';
import React from 'react';
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal"
import Books from "./Book"
import Currently from "./Currently_shelf"
import Want_to_read from "./Wishlist_shelf"
import Past_reads from './Already_read';
  


class App extends React.Component {
  constructor(){
    super()
    this.state={modalState:false,components_array:{"Currently Reading":[],"Want to read":[],"Read":[]}}
  }

     setting_shelves=(new_array)=>{
      this.setState(prevState=>prevState={...prevState,new_array})
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
             <Currently state={this.state.components_array.Currently}/>
           </div>
           <div className='book_container  p-4 border'>
             <div className="section_title title_font">
               Want To Read
             </div>
             <Want_to_read state={this.state.components_array.Want}/>
           </div>
           <div className='book_container p-4 border'>
             <div className="section_title title_font">
               Read
             </div>
             <Past_reads state={this.state.components_array.Read}/>

           </div>

           <Modal  state={this.state.modalState} shelves={this.state.components_array}/>
           
                    
         </div></>
      ) 
    }
    
  
  
}



export default App;
