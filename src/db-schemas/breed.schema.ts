import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export type BreedDocument = Breed & Document;

@Schema({ versionKey: false, timestamps: true })
export class Breed {
  @ApiProperty({ example: '6373c0bca5a6e4c9556f1e7a' })
  _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: 'Siberian Husky' })
  @Prop()
  breed: string;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
