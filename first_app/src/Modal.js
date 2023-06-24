import React from "react"


export default class Modal extends React.Component{

    constructor(props){
        super(props)


       this.state={modalState:this.props.state}
        
       this.setter=this.setter.bind(this)
    }


    setter=()=>{

        this.setState({modalState:!this.state.modalState})
    }





    render(){
        console.log(this.state.modalState)

       

        return (
            <>
            {this.state.modalState!=true ?
            <button className="modal_button"
             onClick={()=>{
                this.setter()
                }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg> </button>
            :
            <div className="modal_background">
                <div className="d-flex w-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkgray" class="bi bi-arrow-left" viewBox="0 0 16 16" onClick={()=>{
                        this.setter()
                    }}>
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                    <input type="text" id="book_input" className="w-100 " placeholder="Search by title or author..." ></input>
                </div>
            </div>
            }
            </>
            
        )
    }

      
    
}