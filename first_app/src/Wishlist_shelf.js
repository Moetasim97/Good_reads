import React from 'react'
import Books from "./Book"



export default class Want_to_read extends React.Component {

    constructor(props){
        super(props)
    }

    
    static getDerivedStateFromProps(props,state){

        return {state_object:props.state["Want to read"]}
        
    }

  



    render(){

  
        console.log(this.state.state_object)
        var rendering_object={}
        for(let key in this.props.copy){
            rendering_object[key]=JSON.parse(this.props.copy[key])
        }
       


        return (
            <>
            <div className='row pt-3'>
            {rendering_object["Want to read"]? rendering_object["Want to read"].map((book,key)=>{
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