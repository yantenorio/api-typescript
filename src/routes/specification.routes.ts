import { response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specifictionsRepository = new SpecificationRepository();

//@route   POST /specifications/
//@desc    this route is used to call the create specification function
specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    
    const createSpecificationService = new CreateSpecificationService(specifictionsRepository);

    createSpecificationService.execute({ name, description });

    response.status(201).send();
})

export { specificationRoutes }