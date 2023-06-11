import './App.css';
import React from 'react';
// import Book from "./Currently"
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCaretDown } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai"
import { IconContext } from "react-icons"


class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  
  componentDidMount(){
    
    fetch("https://openlibrary.org/api/books?bibkeys=9780980200447,9781137014726,9780062937674,9780062407818,9780743200400,9780471445500,9780679645276&jscmd=data&format=json")
    .then((response)=>response.json())
  .then((data)=>{
    if(data){
   
      for(let key in data)
      {
        if(!data[key].cover){
          data[key].cover={medium:"https://tse4.mm.bing.net/th?id=OIP.crTooAkceDYLbEtOKVWODQHaJ4&pid=Api&P=0&h=180"}
        }
       data[key].category="Currently_Reading" 
  
       
      }
      this.setState({data})
    }
  }); 
}

  render(){
    console.log(this.state.data )
    var [current,future,past]=[[],[],[]];
       for(let key in this.state.data){
        if(this.state.data[key].category=="Currently_Reading"){
          current.push(this.state.data[key])
        }
        else if(this.state.data[key].category=="Want_To_Read"){
          future.push(this.state.data[key])
        }
        else if(this.state.data[key].category=="Read")
        {
          past.push(this.state.data[key])
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
             <div className=' row g-2 mt-1'>
              
             {current.map((book,index)=>{ 
               return <div key={index} className="book_wrapper col-md-3 ">
                 <div className='d-flex flex-column align-items-center  fit_content '>
                   {/* I apologize for this next line of code, its just a workaround for now */}
                   {<img src={book.cover.medium}/>}
                   <div className="book_title">{book.title}</div>
                   <div className='text-secondary'>{book.authors[0].name}</div></div>
                   <IconContext.Provider value={{ color: "white",size:"3em", className: "my_class" }}>
                       <div>
                         < AiFillCaretDown onClick={console.log("hi")}/>
                       </div>
                     </IconContext.Provider>
                      
                   </div>
                   })}
               </div></div>
           </div>
           <div className='second_container generic_border'>
             <div className="section_title title_font">
               Want To Read
             </div>
            
             <div className="container">
               <div className='row'>
                   {/* <Book data={this.state.data} section="want_to_read" /> */}
               </div>
             </div>
           </div>
           <div className='third_container generic_border'>
             <div className="section_title title_font">
               Read
             </div>
             <div className="container">
               <div className='row'>
                   {/* <Book data={this.state.data} section="want_to_read" /> */}
               </div>
             </div>
           </div>
           <IconContext.Provider value={{ color: "white",size:"3em", className: "position_adjuster" }}>
                       <div>
                         <AiOutlinePlus/>
                       </div>
                     </IconContext.Provider>
                      
                    
         </div></>
      ) 
    }
    
  
  
}



export default App;
