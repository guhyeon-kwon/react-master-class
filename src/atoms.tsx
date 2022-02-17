import { atom, selector } from "recoil";

export interface IToDo{
    id: number;
    text: string;
}

interface IToDoState {
    [key: string]: IToDo[]
}

export const toDoState = atom<IToDoState>({
    key: "todo",
    default: {
        to_do: [{id:1, text:"hello"}, {id:2, text:"hello2"}],
        doing: [],
        done: [],
    }
})