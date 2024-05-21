import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeQuestionsService } from './type-questions.service';
import { CreateTypeQuestionDto } from './dto/create-type-question.dto';
import { UpdateTypeQuestionDto } from './dto/update-type-question.dto';

@Controller('type-questions')
export class TypeQuestionsController {
  constructor(private readonly typeQuestionsService: TypeQuestionsService) {}

  @Post()
  async create(@Body() createTypeQuestionDto: CreateTypeQuestionDto) {
    const data = await this.typeQuestionsService.create(createTypeQuestionDto);

    return data;
  }

  @Get()
  findAll() {
    return this.typeQuestionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeQuestionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeQuestionDto: UpdateTypeQuestionDto,
  ) {
    return this.typeQuestionsService.update(+id, updateTypeQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeQuestionsService.remove(+id);
  }
}
