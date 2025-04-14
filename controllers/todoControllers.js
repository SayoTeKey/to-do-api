// Diese Datei enthält die Controller-Logik für die Todo-App
// D.h (das heißt) - ALLE CRUD-Operationen
// Der braucht die Models Information
// 1. Model importieren
// 2. Controller erstellen
// 3. Exportiere den Controller

import todoModel from "../models/todoModel.js";

// POST - CREATE
const createTodoController = async (req, res) => {
    console.log(req.body.todo);
    const neuTodo = req.body.todo;
    try {
        // Erstelle ein neues Todo-Objekt mit dem Model
        const toSave = todoModel({
            todo: neuTodo,
        });
        // Speichere das Todo-Objekt in der Datenbank mit der Methode `save()`
        await toSave.save();
        // Sende eine Antwort zurück an den Client mit dem Statuscode 201 (Created)
        res.status(201).json({ message: "Todo erfolgreich erstellt" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET - READ
// Wir brauchen den `find()`-Befehl von Mongoose

const getAllTodosController = async (req, res) => {
    try {
        // Finde alle Todos in der Datenbank mit der Methode `find()`
        const allTodos = await todoModel.find({});

        // Sende die Todos zurück an den Client mit dem Statuscode 200 (OK)
        res.status(200).json(allTodos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Kontrollers exportieren
export { createTodoController, getAllTodosController };
