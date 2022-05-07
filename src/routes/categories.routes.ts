import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

//@route   POST /categories/
//@desc    this route is used to call the Category Repository
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    categoriesRepository.create({name, description});

    return response.status(201).send()
})

export { categoriesRoutes };