import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from './dto/create-catalog.dto.js';
import { UpdateCatalogDto } from './dto/update-catalog.dto.js';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCatalogDto: CreateCatalogDto) {
    return this.prisma.catalogItem.create({ data: createCatalogDto });
  }

  findAll() {
    return this.prisma.catalogItem.findMany();
  }

  findOne(id: string) {
    return this.prisma.catalogItem.findUnique({ where: { id } });
  }

  update(id: string, updateCatalogDto: UpdateCatalogDto) {
    return this.prisma.catalogItem.update({
      where: { id },
      data: updateCatalogDto,
    });
  }

  remove(id: string) {
    return this.prisma.catalogItem.delete({ where: { id } });
  }
}
