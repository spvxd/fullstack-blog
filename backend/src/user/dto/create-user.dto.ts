import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string
    
    @IsString()
    @MinLength(3, {message: 'Имя пользователя должно содержать не менее 3 символов'})
    @MaxLength(20, {message: 'Имя пользователя должно содержать не более 20 символов'})
    username: string

    @MinLength(5, { message: 'Пароль должен  содержать не менее 5 символов' })
    password: string


}
