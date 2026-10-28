import { PartialType } from '@nestjs/mapped-types';
import { CreateCatalogDto } from './create-catalog.dto.js';

export class UpdateCatalogDto extends PartialType(CreateCatalogDto) {}
