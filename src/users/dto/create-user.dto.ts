import { IsEmail, IsNotEmpty, IsString, Length, Max, MinLength } from "class-validator"

export class CreateUserDto{

    @IsString()
    @MinLength(5)
    name: string


    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}