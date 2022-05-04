import express, { request, response }  from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes);

app.get("/", (request, response) => {
    return response.json({message: "hello world"})  
})  

app.get("/courses", (request, response) =>{
    const { name } = request.body

    response.json(name)
})

app.listen(3333, () => {
    console.log('server on')
})