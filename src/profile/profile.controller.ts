import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() profiledata: Prisma.ProfileCreateInput) {
    return this.profileService.createProfile(profiledata);
  }

  @Get()
  getAll() {
    return this.profileService.get();
  }
}
