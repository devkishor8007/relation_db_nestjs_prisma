import { Prisma } from '.prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() create: Prisma.CategoryCreateInput) {
    return this.categoryService.createPost(create);
  }

  @Get()
  get() {
    return this.categoryService.getAllPost();
  }
}
