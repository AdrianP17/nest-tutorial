import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
    constructor (private usersService: UsersService) {}

    @ApiTags('taghola')
    @ApiOperation({summary: 'Obtiene todos los usuarios'})
    @ApiResponse({status: 200, description: 'Return all users' })
    @ApiResponse({status: 403, description: 'Forbidden' })
    @Get('')
    getUsers() {
        return this.usersService.getUsers()
    }

    @Get('hola')
    getGreet() {
        return 'hola'
    }


    @Post('')
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto ) {
        return this.usersService.createUser(user)
    }
}
