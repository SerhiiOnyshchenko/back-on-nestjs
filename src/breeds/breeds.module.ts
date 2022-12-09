import { Module } from '@nestjs/common';
import { BreedsController } from './breeds.controller';
import { BreedsService } from './breeds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed, BreedSchema } from 'src/db-schemas/breed.schema';

@Module({
  controllers: [BreedsController],
  providers: [BreedsService],
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]),
  ],
})
export class BreedsModule {}
