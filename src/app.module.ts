import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './database/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, CoursesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
