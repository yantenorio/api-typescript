import { Router } from "express";
import { Category } from "../models/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];


categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const category = new Category();

    Object.assign(category,{
        name,
        description,
        created_at: new Date()
    });

    return response.status(201).json({category})
})

export { categoriesRoutes };