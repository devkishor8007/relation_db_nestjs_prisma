import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data });
  }

  getAllUser() {
    return this.prismaService.user.findMany({
      include: {
        profile: true,
      },
    });
  }
}
