import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoryonpostService {
  constructor(private readonly prismaService: PrismaService) {}

  createPost(createPost: Prisma.CategoriesOnPostsCreateInput) {
    return this.prismaService.categoriesOnPosts.create({ data: createPost });
  }

  getAllPost() {
    return this.prismaService.categoriesOnPosts.findMany({
      include: {
        post: true,
      },
    });
  }
}
