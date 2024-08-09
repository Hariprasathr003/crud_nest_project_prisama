import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostService } from "./post.service";
import { Post as PostModel } from "./models/post.model";


@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService){}

    @Get()
    async getAllPosts(): Promise<PostModel[]> {
        return this.postService.getAll();
    }

    @Post()
    async createPost(@Body() postData: PostModel): Promise<PostModel> {
        return this.postService.createPost(postData)
    }

    @Get(':id')
    async getPost(@Param('id') id: number): Promise<PostModel | {}> {
        return this.postService.getPost(+id)
    }

    @Put(':id')
    async editPost(@Param('id') id: number, @Body() postData: PostModel):Promise<PostModel>{
        return this.postService.editPost(+id, postData)
    }

    @Delete(':id')
    async deletePost(@Param('id') id: number): Promise<PostModel> {
        return this.postService.deletePost(+id)
    }

}