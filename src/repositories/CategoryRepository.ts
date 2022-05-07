import { Category } from "../models/Category"

//DTO => DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
    name: String;
    description: String;
}


//@route   POST /categories/
//@desc    this class will handle all database functions
class CategoryRepository {
    private categories : Category[];

    constructor() {
        this.categories = [];
    }

    create({name, description} : ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        });
    
        this.categories.push(category);
    }
}


export { CategoryRepository }