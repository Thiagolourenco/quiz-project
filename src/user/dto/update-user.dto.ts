import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  profile_img: string;
}

// points: string; // Total de pontos do usuário
// level: string;
