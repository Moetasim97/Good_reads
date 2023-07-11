import React from 'react'
import Books from "./Book"



export default class Currently extends React.Component {

    constructor(props){
        super(props)
    
    }

    
    static getDerivedStateFromProps(props,state){

        return {state_object:props.state["Currently Reading"]}
        
    }





    render(){
        var rendering_object={}
        for(let key in this.props.copy){
            rendering_object[key]=JSON.parse(this.props.copy[key])
        }
       
        
  
        console.log(this.state.state_object)
        console.log(rendering_object)

        return (
            <>
            <div className='row pt-3'>
                {rendering_object["Currently Reading"]? rendering_object["Currently Reading"].map((book,key)=>{
                    return(<>
                     <Books state={book} key={key} all_shelves={this.props.shelves} appending_books={this.props.add_to_shelves} book_querying={this.props.book_querying} empty_book={this.props.single_book} filtered={this.props.filtering}/>
                    </>)
                   
                })
            :
            this.state.state_object.map((book,key)=>{
                return(<>
                 <Books state={book} key={key} all_shelves={this.props.shelves} appending_books={this.props.add_to_shelves} book_querying={this.props.book_querying} empty_book={this.props.single_book} filtered={this.props.filtering}/>
                </>)
               
            })}

            </div>
            </>
        )


    }
}