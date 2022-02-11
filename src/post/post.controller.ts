import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/createPostDto';
import { UpdatePostDto } from './dto/updatePostDto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() create: CreatePostDto) {
    return this.postService.createPost(create);
  }

  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById({ id: +id });
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.updatePost({ id: +id }, updatePostDto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postService.deletePost({ id: +id });
  }
}
