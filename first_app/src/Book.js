import React from "react"


const _ = require('lodash');

export default class extends React.Component{

    constructor(props){
        super(props)
        this.state={book_data:this.props.state,listState:false,book_shelves:{}}
        this.toggle_shelves_list=this.toggle_shelves_list.bind(this)
        this.add_books=this.add_books.bind(this)
    }


    toggle_shelves_list=()=>{
        this.setState((prevState)=>prevState={...prevState,listState:!prevState.listState})
    }

    add_books=(updated_shelves)=>{
        this.setState((prevState)=>prevState={...prevState,book_shelves:updated_shelves})
    }




    static getDerivedStateFromProps(props,state){
     

        return [{book_shelves:props.all_shelves},{book_data:props.state}]
        
    }


    render(){
       
        return(
            <>
            <>
    <div className="col-md-3">
        <div className="book_wrapper  d-flex flex-column  align-items-center fit-cont">
            {this.state.book_data.cover_i? <img src={`https://covers.openlibrary.org/b/id/${this.state.book_data.cover_i}-M.jpg`}/>
            :<img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}/>}
           <div className="book_info p-1  d-flex flex-column " align="center">
           <div className="book_title " align="start">
                {this.state.book_data.title}
            </div>
            <div className="book_author text-secondary" align="start">
                {this.state.book_data.author_name}
            </div>
           </div>
           <button className="list_toggler " onClick={()=>{
            this.props.book_querying(this.state.book_data)
            this.toggle_shelves_list()
            // console.log(this.props.empty_book)
           }}>
            {this.state.listState?
            
            
            <div className="d-flex flex-column options_list">
             
               {Object.keys(this.props.all_shelves).map((shelf,key)=>{
                            
                         
                return(
                    <>
                <div className="list_item" align="start" key={key} onClick={
                    ()=>{
   
                    // Now I'm going to search my original array to see if the book that I'm going to add is in any of the other shelves
            
                    var entire_data={...this.props.all_shelves}
                    // const keyy = this.book_data.key;
             
                    var transition_copy={}
                    for(let key in entire_data){
                        transition_copy[key]=[]
                        for(let i=0;i<entire_data[key].length;i++){
                          
                           
                            if (entire_data[key][i].key==this.props.empty_book.key){
                              
                                entire_data[key].splice(i,1)
                                
                            }
                        
                            
                        } 
                        transition_copy[key]=JSON.stringify(entire_data[key])
                       }
                    //    console.log(transition_copy[key])
            
                       const new_shelf=[...entire_data[shelf]]
                       new_shelf.push(this.props.empty_book)

                         entire_data[shelf]=new_shelf
                         transition_copy[shelf]=JSON.stringify(entire_data[shelf])
                    
             
              
                    this.setState(({
                        book_shelves: entire_data
                    }))
                    // this.state.book_shelves=entire_data
                    this.props.appending_books(entire_data)
                    this.props.filtered(transition_copy)
                }}>{shelf}</div>
                </>
                )
                
               })}
            </div>:
            <div className="d-none"> text</div>}
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
           </button>
        </div>
    </div>
    </>
            </>
        )
    }
}





