import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeQuestionDto } from './create-type-question.dto';

export class UpdateTypeQuestionDto extends PartialType(CreateTypeQuestionDto) {}
