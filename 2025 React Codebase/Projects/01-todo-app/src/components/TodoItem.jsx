function TodoItem(props) {

    return (
        <div className="row my-4 p-0">
            <div className="col-6 align-content-center fs-4 m-auto text-start rounded">
                <p className="bg-body-tertiary rounded p-2 m-auto">{props.todoName}</p>
            </div>
            <div className="col-4 align-content-center fs-4 m-auto text-start rounded">
                <p className="bg-body-tertiary rounded p-1 m-auto">{props.date}</p>
            </div>
            <div className="col-2 align-content-center">
                <button type="button" className="btn btn-danger w-100 m-auto fs-4" onClick={props.onDeleteBtnClick}>Remove</button>
            </div>
        </div>
    );
};

export default TodoItem;