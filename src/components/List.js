import '../css/list.css';

function List() {
    const todosList = [
        {
            id: 1,
            text: 'Iskepti blynu',
            complete: false
        },
        {
            id: 2,
            text: 'Pasigaminti kavos',
            complete: false
        },
        {
            id: 3,
            text: 'Atsiversti Murakami knyga',
            complete: true
        }
    ]
    const todoItems = todosList.map(todo =>
        <div className="todo-item">
            <p>{todo.text}</p>
            <div className="status">{todo.complete ? '' : 'not'}complete</div>
        </div>
    )

}
return (
    <div className="list">
        <div className="todo-item">
            {todoItems}
        </div>
    </div>
);
}

export default List;