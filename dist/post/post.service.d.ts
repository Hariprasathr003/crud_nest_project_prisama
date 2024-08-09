import { PrismaClientService } from "src/prisma-client/prisma-client.service";
import { Post } from "./models/post.model";
export declare class PostService {
    private prismaService;
    constructor(prismaService: PrismaClientService);
    getAll(): Promise<Post[]>;
    getPost(postId: number): Promise<Post | {}>;
    createPost(post: Post): Promise<Post>;
    editPost(postId: number, post: Post): Promise<any>;
    deletePost(postId: number): Promise<any>;
}
