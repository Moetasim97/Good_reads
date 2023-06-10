import './App.css';
import React from 'react';
import Book from "./Currently"
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  call_back(){
    var returned=this.state
  }

  
  componentDidMount(){
    fetch("https://openlibrary.org/api/books?bibkeys=9780980200447,9781137014726,9780062937674,9780062407818,9780743200400,9780471445500,9780679645276&jscmd=data&format=json")
    .then((response)=>response.json())
  .then((initial_data)=>this.setState({initial_data}));  
}

  render(){
    var model = []
    console.log("hi")
    
    //The above two logs inform me that the render function has by been called for a total of six times.
    
    if(this.state.initial_data!=undefined){
      var books;

        books = this.state.initial_data
        for (let key in books) {
          model.push(books[key])

        }
// just initializing
      for(var i=0;i<model.length;i++){
        var obj=model[i].cover
        model[i].category="Currently_Reading"
      
        
       
      }

      var [current,future,present]=[[],[],[]];
            for (var i = 0; i < model.length; i++) {
        if ("Currently_Reading"==model[i].category){
          current.push(model[i])
        }
        else if ("Want_To_Read" == model[i].category){
          future.push(model[i])
        }
        else if ("Read" == model[i].category) {
          present.push(model[i])

        }
        
      }
   
      
    
      
      return (
     

        <>

          <div className="App">
            <header className="App-header title_font">
              {this.props.admin}'s Reads
            </header>
            <div className='first_container generic_border'>
              <div className="section_title title_font">
                Currently Reading
              </div>
              <div className='container'>
              <div className='d-flex row'>
              {current.map((book,index)=>{ 
                return <div key={index} className="book_wrapper col-md-2 border border-danger ">
                  <div>
                    {/* I apologize for this next line of code, its just a workaround for now */}
                    {(() => {for (var key in book.cover){ return <img src={book.cover[key]} alt="book image"/> }})()}
                    </div>
                    <div>{book.title}</div>
                    <div className='text-secondary'>{book.authors[0].name}</div></div>})}
                </div></div>
            </div>
            <div className='second_container generic_border'>
              <div className="section_title title_font">
                Want To Read
              </div>
              <Book data={this.state.initial_data} section="want_to_read" />
            </div>
            <div className='third_container generic_border'>
              <div className="section_title title_font">
                Read
              </div>
              <Book data={this.state.initial_data} section="already_read" />
            </div>
          </div></>)
    }
  
  
}

}

export default App;
{/* <img src={book.cover} /> */}