import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userCreateInput: Prisma.UserCreateInput) {
    return this.userService.createUser(userCreateInput);
  }

  @Get()
  get() {
    return this.userService.getAllUser();
  }
}
