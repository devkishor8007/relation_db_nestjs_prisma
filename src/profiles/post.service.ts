// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma.service';
// import { PostNotFoundException } from './post.exception';

// @Injectable()
// export class PostService {
//   constructor(private readonly prismaService: PrismaService) {}

//   createPost(createpost: Prisma.PostCreateManyInput) {
//     return this.prismaService.post.create({ data: createpost });
//   }

//   getAll() {
//     return this.prismaService.post.findMany({});
//   }

//   getPostById(id: Prisma.PostWhereUniqueInput) {
//     const post = this.prismaService.post.findUnique({
//       where: id,
//     });

//     if (!post) {
//       throw new PostNotFoundException(+id);
//     }

//     return post;
//   }

//   updatePost(id: Prisma.PostWhereUniqueInput, post: Prisma.PostUpdateInput) {
//     return this.prismaService.post.update({
//       data: { ...post },
//       where: id,
//     });
//   }

//   deletePost(id: Prisma.PostWhereUniqueInput) {
//     return this.prismaService.post.delete({
//       where: id,
//     });
//   }
// }
