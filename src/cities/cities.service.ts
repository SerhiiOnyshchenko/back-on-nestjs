import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from 'src/db-schemas/city.schema';
import { SearchCitiesDto } from './dto/search-cities.dto';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City.name) private cityModule: Model<CityDocument>
  ) {}
  async searchCities(q: SearchCitiesDto) {
    const cities = await this.cityModule
      .find({
        city: { $regex: q + '.*', $options: 'i' },
      })
      .limit(20);
    return cities;
  }
}
