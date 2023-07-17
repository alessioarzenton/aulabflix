import { create } from "zustand";

const useStore = create((set) => ({
    tasks: [
        {
            id: Date.now(),
            task: "lorem",
        },
    ],
    addTask: (task) => set( (state) => ({
        tasks: [...state.tasks, {id: Date.now(), task: task}]
    }) ),
    removeTask: (id) => set( (state) => ({
        tasks: state.tasks.filter( el => el.id != id)
    })),
}));

export default useStore;
