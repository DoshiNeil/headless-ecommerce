import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoryDTO } from "./CreateCategoryDTO";

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) { }

