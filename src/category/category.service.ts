import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  createPost(createPost: Prisma.CategoryCreateInput) {
    return this.prismaService.category.create({ data: createPost });
  }

  getAllPost() {
    return this.prismaService.category.findMany({
      include: {
        posts: true,
      },
    });
  }
}
