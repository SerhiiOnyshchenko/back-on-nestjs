import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class SearchNewsDto {
  @ApiProperty({
    example: 'Kyi',
    description: 'String for search news by title',
  })
  @IsString({ message: 'Should be text' })
  @Length(3, 10, { message: 'Min length 3' })
  readonly q: string;
}
