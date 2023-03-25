import React from "react";


const Form = ({submitFc}) => (
    <form onSubmit={submitFc} >
        <input placeholder="name" name="name"/>
        <input placeholder="link" name="link"/>
        <input placeholder="image" name="image"/>
        <textarea placeholder="description" name="description"/>
        <button>Add new item</button>
    </form>
)

export default Form;