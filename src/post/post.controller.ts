import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() create: Prisma.PostCreateInput) {
    return this.postService.createPost(create);
  }

  @Get()
  get() {
    return this.postService.getAllPost();
  }
}
