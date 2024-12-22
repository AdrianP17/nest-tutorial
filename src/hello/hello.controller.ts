import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { stat } from 'fs';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        return response.status(400).json({message: 'holaa mundo'})
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return `404 not found`
    }

    @Get('new')
    @HttpCode(201)
    newPage() {
        return `smthing new`
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return `Error route not found`
    }


    @Get('ticket/:num')
    getNum(@Param ('num', ParseIntPipe) num : number) {
        return num + 10;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status : boolean ) {
        console.log(typeof(status))
        return status
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name:string, age:number } ) {
        console.log(typeof(query.age))
        return `Hello ${query.name}, you are ${query.age} y old`
    }
}
