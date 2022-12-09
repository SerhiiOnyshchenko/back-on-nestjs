import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Breed } from 'src/db-schemas/breed.schema';
import { BreedsService } from './breeds.service';
import { SearchBreedsDto } from './dto/search-breeds.dto';

@ApiTags('Breeds')
@Controller('breeds')
export class BreedsController {
  constructor(private breedsService: BreedsService) {}

  @ApiQuery({
    name: 'q',
    description: 'q values that need to be considered for filter',
  })
  @ApiOperation({ summary: 'Get array breeds' })
  @ApiResponse({ status: 200, type: [Breed] })
  @Get()
  searchBreeds(@Query('q') q: SearchBreedsDto) {
    return this.breedsService.searchBreeds(q);
  }
}
