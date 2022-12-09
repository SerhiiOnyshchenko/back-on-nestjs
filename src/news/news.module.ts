import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { MongooseModule } from '@nestjs/mongoose';
import { New, NewSchema } from 'src/db-schemas/news.schema';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [MongooseModule.forFeature([{ name: New.name, schema: NewSchema }])],
})
export class NewsModule {}
