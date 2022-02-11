import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CategoryModule } from './category/category.module';
import { PostModule } from './post/post.module';
import { CategoryonpostModule } from './categoryonpost/categoryonpost.module';

@Module({
  imports: [CategoryModule, PostModule, CategoryonpostModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
