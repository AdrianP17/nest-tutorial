import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
    
    @Get('/')
    getAll() {
        return 'Obteniendo todos proyectos'
    }

    @Get('/hi')
    getHi() {
        return 'hola'
    }
}
