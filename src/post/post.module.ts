import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PrismaService } from 'src/prisma.service';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PrismaService],
  controllers: [PostController],
})
export class PostModule {}
