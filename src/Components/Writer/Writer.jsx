import useStore from "../../store";
import { useState } from "react";

function Writer() {
    const [task, setTask] = useState("");
    const { addTask } = useStore();

    const handleClick = () => {
        addTask( task )
    }

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <input
                        className="text-dark"
                        type="text"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                    />
                    <br />
                    <br />
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
        </>
    );
}

export default Writer;
