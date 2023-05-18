import React from 'react'

function Form(props) {
    const { input, setInput, todo, setTodo } = props;
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            content: input,
            complete: false,
            isEdit: false,
        };

        // setTodo([...todo, newTodo]);
        setInput('');
        let addTodo = [...todo];
        setTodo([...addTodo, newTodo]);
    }


    return (
        <form
            className='main-form'
            onSubmit={handleSubmit}>
            <input
                type='text'
                className='input'
                value={input}
                placeholder='Enter new todo...'
                onChange={handleChange}
            ></input>
            <button className='add'>Add</button>
        </form>
    )
}

export default Form