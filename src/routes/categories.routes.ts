import { Router } from "express";

import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

const upload = multer({ dest: "./tmp"});

const categoriesRoutes = Router();

//@route   POST /categories/
//@desc    this route is used to call the create category function
categoriesRoutes.post('/', (request, response) => {
   return createCategoryController.handle(request, response);
});

//@route   GET /categories/
//@desc    this route is used to call the list categories function
categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
});

// @route  POST /categories/import
// @desc   this route import a file and inserts into a temp folder
categoriesRoutes.post('/import', upload.single("file") ,(request, response) => {
    const { file } = request;

    console.log(file);
    return response.send();
});


export { categoriesRoutes };