import { Router } from "express";

import multer from "multer";

import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const upload = multer({ dest: "./tmp"});

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

//@route   POST /categories/
//@desc    this route is used to call the create category function
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name , description });

    return response.status(201).send()
});

//@route   GET /categories/
//@desc    this route is used to call the list categories function
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories);
});

// @route  POST /categories/import
// @desc   this route import a file and inserts into a temp folder
categoriesRoutes.post('/import', upload.single("file") ,(request, response) => {
    const { file } = request;

    console.log(file);
    return response.send();
});


export { categoriesRoutes };