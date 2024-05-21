export class CreateQuestionDto {
  typeQuestionsID: number;
  name: string;
  type: string;
  image: string;
  point: number;
  options: Options[];
  difficulty: number;
}

export class Options {
  name: string;
  correct: boolean;
}
