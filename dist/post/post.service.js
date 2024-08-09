"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_client_service_1 = require("../prisma-client/prisma-client.service");
let PostService = class PostService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.post.findMany();
    }
    async getPost(postId) {
        return this.prismaService.post.findUnique({ where: { id: +postId } });
    }
    async createPost(post) {
        return this.prismaService.post.create({ data: post });
    }
    async editPost(postId, post) {
        const found_post = await this.getPost(+postId);
        if (!found_post) {
            return new Promise((resolve, reject) => {
                resolve({ message: 'not found' });
            });
        }
        return this.prismaService.post.update({
            where: { id: +postId },
            data: { title: post?.title, description: post?.title, tags: post?.tags }
        });
    }
    async deletePost(postId) {
        const found_post = await this.getPost(+postId);
        if (!found_post) {
            return new Promise((resolve, reject) => {
                resolve({ message: 'not found' });
            });
        }
        return this.prismaService.post.delete({
            where: { id: +postId }
        });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_client_service_1.PrismaClientService])
], PostService);
//# sourceMappingURL=post.service.js.map