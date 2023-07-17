import useStore from "../../store";

function Reader() {
    const { tasks, removeTask } = useStore();

    return (
        <>
            <div className="container">
                <ul>
                    {tasks.map((el) => (
                        <li key={el.id} className="d-flex">
                            <p>{el.task}</p>
                            <button className="text-danger fw-bold" onClick={() => removeTask(el.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Reader;
