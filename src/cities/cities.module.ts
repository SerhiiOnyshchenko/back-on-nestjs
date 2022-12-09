import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from 'src/db-schemas/city.schema';

@Module({
  controllers: [CitiesController],
  providers: [CitiesService],
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
})
export class CitiesModule {}
