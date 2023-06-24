import './App.css';
import React from 'react';
import $ from "jquery"
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal"
  


class App extends React.Component {
  constructor(){
    super()
    this.state={modalState:false}
  }


  
  componentDidMount(){

    
    
    fetch("")
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
    
   console.log(this.state)
   
    
      
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
           </div>
           <div className='second_container generic_border'>
             <div className="section_title title_font">
               Want To Read
             </div>
           </div>
           <div className='third_container generic_border'>
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
