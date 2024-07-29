import { PartialType } from "@nestjs/mapped-types";
import { CreateTagDTO } from "./CreateTagDTO";

export class UpdateTagDTO extends PartialType(CreateTagDTO) { }
