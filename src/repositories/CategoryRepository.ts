import { Category } from "../models/Category"

//DTO => DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
    name: String;
    description: String;
}

//@desc    this class will handle all database functions
class CategoryRepository {
    // imports the category model
    private categories : Category[];

    // initialize the class
    constructor() {
        this.categories = [];
    }

    //@route   POST /categories/
    //@desc    inserts a category in database
    create({name, description} : ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        });
    
        this.categories.push(category);
    }

    //@route   GET /categories/
    //@desc    returns a list of categories
    list(): Category[] {
        return this.categories;
    }

    findByName(name: String): Category {
        const category = this.categories.find(category => category.name === name);
        
        return category;
    }
}


export { CategoryRepository }