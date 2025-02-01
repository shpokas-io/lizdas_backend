import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
