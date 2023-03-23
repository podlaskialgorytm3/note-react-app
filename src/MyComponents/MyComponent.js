import React from "react";




class MyComponent extends React.Component {
    state = {
        text: "JOŁ JOŁ JOŁ"
    }
    handleChange = (event) => {
        this.setState({text: event.target.value})
    };

    render(){
        return (
            <>
            <h2>{this.state.text}</h2>
            <input placeholder="Your name" onChange={this.handleChange}/>
            </>
        )   
    }
}

export default MyComponent;