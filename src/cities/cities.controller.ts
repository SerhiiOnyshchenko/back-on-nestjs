import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { City } from 'src/db-schemas/city.schema';
import { CitiesService } from './cities.service';
import { SearchCitiesDto } from './dto/search-cities.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @ApiQuery({
    name: 'q',
    description: 'q values that need to be considered for filter',
  })
  @ApiOperation({ summary: 'Get array cities' })
  @ApiResponse({ status: 200, type: [City] })
  @Get()
  searchCities(@Query('q') q: SearchCitiesDto) {
    return this.citiesService.searchCities(q);
  }
}
