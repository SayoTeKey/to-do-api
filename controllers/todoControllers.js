// Diese Datein beinhaltet die Controller-Logik für die Todo-App
// d.h. ALLE CRUD-Operationen
// sie braucht die Modell- Infos

// POST - CREATE
const createTodoController = async (req, res) => {
    console.log(req.body);
    try {
        res.status(201).json({ messge: "Todo erfolgreich erstellt" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};