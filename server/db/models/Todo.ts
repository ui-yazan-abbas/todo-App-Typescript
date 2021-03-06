import { Document, Schema, model } from 'mongoose';

interface ITodo extends Document {
    title: String,
    description: String,
    done: Boolean,
    price: String,
    subTasks?: ITodo[],
}

const TodosSchema = new Schema<ITodo>({
    title: {
        type: String,
        required: true
    },
    description: String,
    done: {
        type: Boolean,
        default: false
    },
    price: String,
    subTasks: [{}],
});

const Todo = model<ITodo>('Todo', TodosSchema);

export default Todo;