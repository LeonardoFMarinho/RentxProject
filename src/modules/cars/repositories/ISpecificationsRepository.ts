import { Category } from "../model/category";
import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string
    description: string
}

interface ISpecificationsRepositoy {
    create({ description, name }: ICreateSpecificationDTO): void
    findByName(name: string): Specification
}


export { ISpecificationsRepositoy, ICreateSpecificationDTO }