import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string

    @MinLength(5, { message: 'Incorrect symbols count' })
    password: string


}
