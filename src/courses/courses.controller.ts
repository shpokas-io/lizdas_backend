import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth/jwt-auth.guard';

// @UseGuards(JwtAuthGuard) uncomment once FE is ready
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll() {
    return this.coursesService.findAll();
  }

  @Post()
  async create(
    @Body() body: { title: string; description?: string; videoUrl: string },
  ) {
    return this.coursesService.create(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
}
