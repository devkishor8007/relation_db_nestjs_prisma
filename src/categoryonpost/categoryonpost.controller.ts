import { Body, Post, Get, Controller } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CategoryonpostService } from './categoryonpost.service';

@Controller('categoryonpost')
export class CategoryonpostController {
  constructor(private readonly categoryPostService: CategoryonpostService) {}

  @Post()
  create(@Body() create: Prisma.CategoriesOnPostsCreateInput) {
    return this.categoryPostService.createPost(create);
  }

  @Get()
  get() {
    return this.categoryPostService.getAllPost();
  }
}
