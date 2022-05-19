import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoryRepository) {}

    execute({ name, description }: IRequest): void {
        
        const categoryAlreadyCreated = this.categoriesRepository.findByName(name);

        if (categoryAlreadyCreated) {
            throw new Error("Category already created");
            
        }

        this.categoriesRepository.create({ name, description });

    }
}


export { CreateCategoryUseCase }