import { Module } from '@nestjs/common';
import { TypeQuestionsService } from './type-questions.service';
import { TypeQuestionsController } from './type-questions.controller';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  controllers: [TypeQuestionsController],
  providers: [TypeQuestionsService, PrismaService],
})
export class TypeQuestionsModule {}
