import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { New } from 'src/db-schemas/news.schema';
import { SearchNewsDto } from './dto/search-news.dto';
import { NewsService } from './news.service';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @ApiQuery({
    name: 'q',
    type: String,
    required: false,
    description: 'q values that need to be considered for filter',
  })
  @ApiOperation({ summary: 'Get array news' })
  @ApiResponse({ status: 200, type: [New] })
  @Get()
  findAll(@Query('q') q: SearchNewsDto) {
    return this.newsService.findAll(q);
  }
}
