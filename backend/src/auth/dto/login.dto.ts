import { IsEmail, IsString } from "class-validator"

export class LoginDto {
    id: string

    @IsString()
    login: string

    @IsEmail()
    email: string
}
