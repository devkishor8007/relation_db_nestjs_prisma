import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryonpostController } from './categoryonpost.controller';
import { CategoryonpostService } from './categoryonpost.service';

@Module({
  providers: [PrismaService, CategoryonpostService],
  controllers: [CategoryonpostController],
})
export class CategoryonpostModule {}
