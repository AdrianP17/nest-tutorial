import {Module} from "@nestjs/common" 
import {TaskController} from "./tasks.controller"
import { TaskService } from "./tasks.service"
@Module ({
    providers: [TaskService],
    controllers: [TaskController]
})
export class TaskModule {}