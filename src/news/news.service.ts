import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { New, NewDocument } from 'src/db-schemas/news.schema';
import { SearchNewsDto } from './dto/search-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(New.name)
    private newModule: Model<NewDocument>
  ) {}
  async findAll(
    q: SearchNewsDto
  ): Promise<{ data: New[]; totalPages: number }> {
    const find =
      q === undefined
        ? {}
        : {
            $or: [
              { description: { $regex: `${q}` } },
              { title: { $regex: `${q}` } },
            ],
          };
    const data = await this.newModule.find(find).sort({ date: -1 });
    const totalPages = await this.newModule.find().count();
    return { data, totalPages };
  }
}
