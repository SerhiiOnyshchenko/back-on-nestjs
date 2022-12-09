import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class SearchBreedsDto {
  @ApiProperty({
    example: 'Hus',
    description: 'String for search breed by breed',
  })
  @IsString({ message: 'Should be text' })
  @Length(3, 10, { message: 'Min length 3' })
  readonly q: string;
}
