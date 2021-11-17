// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()

require("dotenv").config()


// 2. MIDDLEWARES


// 3. RUTAS
app.get("/", (req, res) => {
	res.render("index")
})

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})
