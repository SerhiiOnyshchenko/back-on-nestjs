import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
// import { Min } from 'sequelize-typescript';

export class SearchCitiesDto {
  @ApiProperty({
    example: 'Kyi',
    description: 'String for search city by name',
  })
  @IsString({ message: 'Should be text' })
  @Length(3, 10, { message: 'Min length 3' })
  readonly q: string;
}
