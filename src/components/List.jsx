import React from 'react'

function List(props) {
    const { todo, setTodo, edit, setEdit } = props;

    console.log(todo)
    const handleDelete = (i) => {
        let deleteTodo = [...todo];
        deleteTodo.splice(i, 1);
        setTodo([...deleteTodo]);
    }

    const handleComplete = (i) => {
        let completeTodo = ([...todo])
        completeTodo[i].complete = !completeTodo[i].complete;
        setTodo([...completeTodo]);
    }
    const handleEdit = (i) => {
        let editTodo = [...todo];
        editTodo[i].isEdit = !editTodo[i].isEdit;
        setEdit(editTodo[i].content)
        setTodo([...editTodo]);
    }

    const handleEditChange = (e) => {
        setEdit(e.target.value);

    }
    const handleUpdate = (i) => {
        let updateTodo = [...todo];
        updateTodo[i].content = edit;
        updateTodo[i].isEdit = !updateTodo[i].isEdit;
        setTodo([...updateTodo]);
    }
    return (
        <div className='container-todo'>
            {todo.map((e, i) =>
            (
                !e.isEdit ? (
                    <div key={i} className={e.complete ? 'completed' : 'list-todo'}>
                        <div className='todo-item'>{e.content}</div>
                        <div className='list-btn'>
                            <button>
                                <ion-icon
                                    name='create-outline'
                                    onClick={() => handleEdit(i)}></ion-icon>
                            </button>
                            <button>
                                <ion-icon
                                    name='trash-outline'
                                    onClick={() => handleDelete(i)}
                                ></ion-icon>
                            </button>
                            <button>
                                <ion-icon
                                    name='checkmark-done-outline'
                                    onClick={() => handleComplete(i)}
                                ></ion-icon>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div key={i} className={e.complete ? 'completed' : 'list-todo'}>
                        <input
                            type='text'
                            className='todo-item'
                            value={edit}
                            onChange={handleEditChange}
                        ></input>
                        <div className='list-btn'>
                            <button>
                                <ion-icon
                                    name='sync-outline'
                                    onClick={handleUpdate(i)}
                                ></ion-icon>
                            </button>
                            <button>
                                <ion-icon
                                    name='trash-outline'
                                    onClick={handleDelete}
                                ></ion-icon>
                            </button>

                        </div>
                    </div>
                )

            ))
            }

        </div >
    )

}
export default List