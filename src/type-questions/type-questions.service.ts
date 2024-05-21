import { Injectable } from '@nestjs/common';
import { CreateTypeQuestionDto } from './dto/create-type-question.dto';
import { UpdateTypeQuestionDto } from './dto/update-type-question.dto';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class TypeQuestionsService {
  constructor(private prisma: PrismaService) {}

  async create(createTypeQuestionDto: CreateTypeQuestionDto) {
    const data = await this.prisma.typeQuestions.create({
      data: {
        difficulty: createTypeQuestionDto.difficulty,
        level: createTypeQuestionDto.level,
        life: createTypeQuestionDto.life,
        points: createTypeQuestionDto.points,
        type_question: createTypeQuestionDto.type_question,
      },
    });

    return data;
  }

  async findAll() {
    const data = await this.prisma.typeQuestions.findMany();

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeQuestion`;
  }

  update(id: number, updateTypeQuestionDto: UpdateTypeQuestionDto) {
    return `This action updates a #${id} typeQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeQuestion`;
  }
}
