import { Injectable } from '@nestjs/common';

import { CreateQuestionDto, Options } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../shared/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.prisma.questions.create({
      data: {
        difficulty: createQuestionDto.difficulty,
        image: createQuestionDto.image,
        name: createQuestionDto.name,
        point: createQuestionDto.point,
        type: createQuestionDto.type,
        typeQuestionsID: createQuestionDto.typeQuestionsID,
        options: {
          create: createQuestionDto.options.map((option: Options) => ({
            name: option.name,
            correct: option.correct,
          })),
        },
      },
    });

    return question;
  }

  async findAll() {
    const questions = await this.prisma.questions.findMany({
      include: {
        options: {
          select: {
            name: true,
            correct: true,
          },
        },
        type_questions: {
          select: {
            id: true,
            type_question: true,
            points: true,
            difficulty: true,
          },
        },
      },
    });

    return questions;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
