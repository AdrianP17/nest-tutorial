import {Injectable, NotFoundException} from "@nestjs/common"
import { CreateTaskDto } from "./dto/create-task.dto"
import { updateTaskDto } from "./dto/update-task.dto"

@Injectable()
export class TaskService {
    private tasks = []

    getTasks () {
        return this.tasks
    }

    getTask (id: number) {
        const taskFound = this.tasks.find(task => task.id === id)
    
        if(!taskFound) {
            return new NotFoundException(`Task with id: ${id} not found`)
        }
    }

    createTask (task: CreateTaskDto) {
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return 'Creando'
    }

    updateTask (task : updateTaskDto) {
        return 'Actualizando'
    }

    deleteTask () {
        return 'Eliminando'
    }

    patchTask () {
        return 'Patch'
    }
}