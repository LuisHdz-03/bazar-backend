import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto.js';
import { UpdateShopDto } from './dto/update-shop.dto.js';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class ShopsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createShopDto: CreateShopDto) {
    return this.prisma.shop.create({ data: createShopDto });
  }

  findAll() {
    return this.prisma.shop.findMany();
  }

  findOne(id: string) {
    return this.prisma.shop.findUnique({ where: { id } });
  }

  update(id: string, updateShopDto: UpdateShopDto) {
    return this.prisma.shop.update({ where: { id }, data: updateShopDto });
  }

  remove(id: string) {
    return this.prisma.shop.delete({ where: { id } });
  }
}
