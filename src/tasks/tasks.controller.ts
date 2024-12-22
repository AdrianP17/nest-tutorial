import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe} from "@nestjs/common"
import { TaskService } from "./tasks.service"
import { CreateTaskDto } from "./dto/create-task.dto"
import { updateTaskDto } from "./dto/update-task.dto"

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService: TaskService) {
    }

    @Get('')
    getAllTasks(@Query() query : any) {
        console.log(query)
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id : string) {
        console.log(id)
        return this.tasksService.getTask(parseInt(id))
    }

    @Post('')
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto ) {
        return this.tasksService.createTask(task)
    }

    @Put('')
    updateTask(@Body() task: updateTaskDto) {
        return this.tasksService.updateTask(task)
    }

    @Delete('')
    deleteTask() {
        return this.tasksService.deleteTask()
    }

    @Patch('')
    patchTask() {
        return this.tasksService.patchTask()
    }

}