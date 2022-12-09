import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Breed, BreedDocument } from 'src/db-schemas/breed.schema';
import { SearchBreedsDto } from './dto/search-breeds.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectModel(Breed.name) private breedModule: Model<BreedDocument>
  ) {}
  async searchBreeds(q: SearchBreedsDto) {
    const breeds = await this.breedModule
      .find({
        breed: { $regex: q + '.*', $options: 'i' },
      })
      .limit(20);
    return breeds;
  }
}
