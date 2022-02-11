import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  createProfile(createProfile: Prisma.ProfileCreateInput) {
    const profile = this.prismaService.profile.create({ data: createProfile });

    if (!profile) throw new BadRequestException('Akl');

    return profile;
  }

  get() {
    return this.prismaService.profile.findMany({
      include: {
        User: true,
      },
    });
  }
}
