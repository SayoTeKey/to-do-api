import todoModel from "../model/todoModel.js";

// POST / CREATE

async function createTodoController(req, res) {
    try {
        const newTodo = todoModel({
            todo: req.body.todo,
        });

        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    } catch (error) {
        res.json(error);
    }
}

// GET ALL TASKS
async function getAllTodosController(req, res) {
    try {
        const allTodoItems = await todoModel.find({});
        res.status(200).json(allTodoItems);
    } catch (error) {
        res.json(error);
    }
}

// UPDATE A TASK
async function updateTodoController(req, res) {
    const updateId = req.params.todoId;
    try {
        const updatedItem = await todoModel.findByIdAndUpdate(
            updateId,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (error) {
        res.json(error);
    }
    //console.log(req.params.todoId);
}

// DELETE TASK
async function deleteTodoController(req, res) {
    const deleteId = req.params.todoId;
    try {
        await todoModel.findByIdAndDelete(deleteId);
        res.status(200).json("Todo GELÖSCHT!");
    } catch (error) {
        res.json(error);
    }
}

export {
    getAllTodosController,
    createTodoController,
    updateTodoController,
    deleteTodoController,
};
