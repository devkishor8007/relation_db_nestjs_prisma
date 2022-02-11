import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  createProfile(createPost: Prisma.PostCreateInput) {
    return this.prismaService.post.create({ data: createPost });
  }

  get() {
    return this.prismaService.post.findMany({
      include: {
        user: true,
      },
    });
  }
}
