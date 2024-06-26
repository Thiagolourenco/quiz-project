import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeQuestionsModule } from './type-questions/type-questions.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [UserModule, AuthModule, TypeQuestionsModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
