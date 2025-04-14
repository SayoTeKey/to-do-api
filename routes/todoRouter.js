// Diese Datei enthält die Routen-Logik der Todo-App
// und kontrolliert die CRUD-Operationen
// 1. Importiere Express
// 2. Importiere die Controller
// 3. Erstelle einen Router aus Express
// 4. Definiere die Routen
// 5. Exportiere den Router
import express from "express";
import { createTodoController, deleteTodoController, getAllTodosController, updateTodoController } from "../controllers/todoControllers.js";

// 3. Erstelle einen Router aus Express
const todoRouter = express.Router();

// 4. Definiere die Routen
// POST - CREATE
todoRouter.post("/", createTodoController);

// GET - READ
todoRouter.get("/", getAllTodosController);

// UPDATE - UPDATE
todoRouter.put("/:id", updateTodoController);

// DELETE - DELETE
todoRouter.delete("/:id", deleteTodoController);

// 5. Exportiere den Router
export default todoRouter;
