import { Category } from "../models/Category";

//DTO => DATA TRANSFER OBJECT
interface ICreateCategoryDTO {
    name: String;
    description: String;
}
interface ICategoryRepository {
    findByName(name: string) : Category;

    list() : Category[];

    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO }