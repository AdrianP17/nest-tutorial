import { Module } from '@nestjs/common';
import {TaskModule} from "./tasks/tasks.module"
import { ProjectsModule } from './projects/projects.module';
import { HelloController } from './hello/hello.controller';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
})
export class AppModule {}
