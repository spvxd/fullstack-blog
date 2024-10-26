import { IsEmail } from "class-validator"

export class LoginDto {
    id: string
    @IsEmail()
    email: string
}
