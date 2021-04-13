import {uuid} from "uuidv4";

const todos = [
    {
        id: uuid(),
        name: 'Groceries',
        description: 'Get some groceries',
        done: false
    },
    {
        id: uuid(),
        name: 'Math Homework',
        description: 'Do your homework until 7am',
        done: true
    },
    {
        id: uuid(),
        name: 'Brush you teeth',
        description: 'Brush your teeth in the morning and in the evening',
        done: false
    }
]

export default todos;