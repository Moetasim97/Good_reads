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
    this.state={modalState:false,components_array:{"Currently Reading":[],"Want to read":[],"Read":[]},single_book:{},filtered_object:{}}
    this.add_books=this.add_books.bind(this)
    this.cache_book=this.cache_book.bind(this)
    this.filtered_copy=this.filtered_copy.bind(this)
  }

     setting_shelves=(new_array)=>{
      this.setState(prevState=>prevState={...prevState,new_array})
    }



    add_books=(updated_shelves)=>{
      this.setState((prevState)=>prevState={...prevState,components_array:updated_shelves})

      
  }

  filtered_copy=(object)=>{
    this.setState({filtered_object:object})
  }

  cache_book=(new_book)=>{
    this.setState(prevState=>prevState={...prevState,single_book:new_book})
  } 

  render(){
    
   
    
      
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
             <Currently state={this.state.components_array} shelves={this.state.components_array} add_to_shelves={this.add_books} book_querying={this.cache_book} single_book={this.state.single_book} filtering={this.filtered_copy} copy={this.state.filtered_object}/>
           </div>
           <div className='book_container  p-4 border'>
             <div className="section_title title_font">
               Want To Read
             </div>
             <Want_to_read state={this.state.components_array} shelves={this.state.components_array} add_to_shelves={this.add_books} book_querying={this.cache_book} single_book={this.state.single_book} filtering={this.filtered_copy} copy={this.state.filtered_object}/>
           </div>
           <div className='book_container p-4 border'>
             <div className="section_title title_font">
               Read
             </div>
             <Past_reads state={this.state.components_array} shelves={this.state.components_array} add_to_shelves={this.add_books} book_querying={this.cache_book} single_book={this.state.single_book} copy={this.state.filtered_object} filtering={this.filtered_copy}/>

           </div>

           <Modal  state={this.state.modalState} shelves={this.state.components_array} add_to_shelves={this.add_books} book_querying={this.cache_book} single_book={this.state.single_book} filtering={this.filtered_copy}/>
           
                    
         </div></>
      ) 
    }
    
  
  
}



export default App;
