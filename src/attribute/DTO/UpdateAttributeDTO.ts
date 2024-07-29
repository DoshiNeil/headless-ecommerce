import { PartialType } from "@nestjs/mapped-types";
import { CreateAttributeDTO } from "./CreateAttributeDTO";

export class UpdateAttributeDTO extends PartialType(CreateAttributeDTO) { }
