import { Specification } from "../models/Specification";

//DTO => DATA TRANSFER OBJECT
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description } : ICreateSpecificationDTO ): void;
    findByName(name: string): Specification;
    
}


export {ISpecificationsRepository , ICreateSpecificationDTO}