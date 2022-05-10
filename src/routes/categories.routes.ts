import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

//@route   POST /categories/
//@desc    this route is used to call the create category function
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyCreated = categoriesRepository.findByName(name);

    if(categoryAlreadyCreated) {
        return response.status(400).json({message: "category already created!"})
    }

    categoriesRepository.create({name, description});

    return response.status(201).send()
});

//@route   GET /categories/
//@desc    this route is used to call the list categories function
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories);
});



export { categoriesRoutes };