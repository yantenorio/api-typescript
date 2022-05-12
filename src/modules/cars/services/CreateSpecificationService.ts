import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specifictionsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specifictionsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists");

        }

        this.specifictionsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService }