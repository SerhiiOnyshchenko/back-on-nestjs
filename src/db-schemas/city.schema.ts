import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export type CityDocument = City & Document;

@Schema({ versionKey: false, timestamps: true })
export class City {
  @ApiProperty({ example: '6373c0bca5a6e4c9556f1e7a' })
  _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: 'Kyiv' })
  @Prop()
  city: string;

  @ApiProperty({ example: 'Misto' })
  @Prop()
  region: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
