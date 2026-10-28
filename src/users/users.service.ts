  import { Injectable } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto.js';
  import { UpdateUserDto } from './dto/update-user.dto.js';
  import { PrismaService } from '../prisma.service.js';

  @Injectable()
  export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
      return this.prisma.user.create({ data: createUserDto });
    }

    findAll() {
      return this.prisma.user.findMany({
        omit:{password: true}
      });
    }

    findOne(id: string) {
      return this.prisma.user.findUnique({
        where: {
          id,
        },
      });
    }

    update(id: string, updateUserDto: UpdateUserDto) {
      return this.prisma.user.update({ where: { id }, data: updateUserDto });
    }

    remove(id: string) {
      return this.prisma.user.delete({ where: { id } });
    }
  }
