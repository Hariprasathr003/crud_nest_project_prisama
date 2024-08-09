import { PostService } from "./post.service";
import { Post as PostModel } from "./models/post.model";
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAllPosts(): Promise<PostModel[]>;
    createPost(postData: PostModel): Promise<PostModel>;
    getPost(id: number): Promise<PostModel | {}>;
    editPost(id: number, postData: PostModel): Promise<PostModel>;
    deletePost(id: number): Promise<PostModel>;
}
