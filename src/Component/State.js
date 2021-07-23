import React from "react";
//import image from "./logo512.png";

class State extends React.Component{
    
    state= {
        Person : {
        fullName:"najla",
        bio:"sss",
        imgsrc:"image",
        profession:"ns2",   
        //booleanshows: PropTypes.bool,
     },
     show: false,
    };
     handleClick=()=>this.setState({...this.state.Person,
    show: !this.state.show,});
   /* State.propTypes={
        State :propTypes.bool,
    }*/

    render(){
      
        return (
            <>
        <h1>hello{this.state.Person.fullName}</h1>
        <h1>this is {this.state.Person.fullName}</h1>
        <img src={this.state.Person.imgsrc} alt="logo512"></img>
        <h1>this is {this.state.Person.profession}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        
        </>
        
        )
    }
}
export default State;