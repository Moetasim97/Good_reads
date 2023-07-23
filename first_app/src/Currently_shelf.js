import React from 'react'
import Books from "./Book"



export default class Currently extends React.Component {

    constructor(props){
        super(props)
    
    }

    
    static getDerivedStateFromProps(props,state){

        console.log("This is also running")
        return {state_object:props.state["Currently Reading"]}
        
    }





    render(){
    
        // console.log(this.state.state_object)


        return (
            
            <>
            <div className='row pt-3'>
                {this.state.state_object? this.state.state_object.map((book,key)=>{
                    return(<>
                     <Books state={book} key={key} all_shelves={this.props.shelves} appending_books={this.props.add_to_shelves} book_querying={this.props.book_querying} empty_book={this.props.single_book} filtered={this.props.filtering}/>
                    </>)
                   
                })
            :
            <div className='d-none'></div>
            }

            </div>
            </>
        )


    }
}