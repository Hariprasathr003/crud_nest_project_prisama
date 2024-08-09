import { Prisma } from "@prisma/client";
export declare class Post implements Prisma.PostCreateInput {
    id: number;
    title: string;
    description: string;
    tags: string;
}
