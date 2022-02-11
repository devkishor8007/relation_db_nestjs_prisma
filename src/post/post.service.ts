import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  createPost(createPost: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data: createPost });
  }

  getAllPost() {
    return this.prismaService.post.findMany({
      include: {
        categories: true,
      },
    });
  }
}
