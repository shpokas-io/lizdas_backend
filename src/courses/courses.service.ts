import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany();
  }

  async create(data: {
    title: string;
    description?: string;
    videoUrl: string;
  }) {
    return this.prisma.course.create({ data });
  }

  async delete(id: string) {
    return this.prisma.course.delete({ where: { id } });
  }
}
