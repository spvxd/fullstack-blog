import {ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(5)
    @IsString({each: true})
    tags: string[];

}
