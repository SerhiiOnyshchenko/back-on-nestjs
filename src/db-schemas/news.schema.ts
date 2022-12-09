import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export type NewDocument = New & Document;

@Schema({ versionKey: false, timestamps: true })
export class New {
  @ApiProperty({ example: '6373c0bca5a6e4c9556f1e7a' })
  _id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: 'title' })
  @Prop({
    type: String,
    required: [true, 'Set title for new'],
  })
  title: string;

  @ApiProperty({ example: 'http://url' })
  @Prop({ type: String })
  url: string;

  @ApiProperty({
    example: 'Травневі прогулянки з улюбленцем не лише приємні...',
  })
  @Prop({ type: String })
  description: string;

  @ApiProperty({ example: '2022-05-04' })
  @Prop({
    type: String,
  })
  date: string;
}

export const NewSchema = SchemaFactory.createForClass(New);
