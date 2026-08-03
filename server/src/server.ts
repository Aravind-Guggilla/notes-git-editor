import app from "./app.js";

const PORT = process.env.PORT || 5000;

const initializeServer = async () => {

    app.listen(PORT, () => {
      console.log(`Server Running at http://localhost:${PORT}/`)
    })
}

initializeServer()