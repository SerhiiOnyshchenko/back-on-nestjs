import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export type FriendDocument = Friend & Document;

@Schema({ collection: 'sponsors', versionKey: false, timestamps: true })
export class Friend {
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

  @ApiProperty({ example: 'http://url' })
  @Prop({ type: String })
  addressUrl: string;

  @ApiProperty({ example: 'http://url' })
  @Prop({
    type: String,
    default: false,
  })
  imageUrl: string;

  @ApiProperty({ example: 'Київ, вулиця Шота Руставелі, 44' })
  @Prop({
    type: String,
    default: null,
  })
  address: string;

  @ApiProperty({
    example: [{ isOpen: true, from: '9:00', to: '17:00' }, '...'],
  })
  @Prop({
    type: Array,
    default: null,
  })
  workDays: [object];

  @ApiProperty({ example: '+380442900329' })
  @Prop({
    type: String,
    default: null,
  })
  phone: string;

  @ApiProperty({ example: 'hello@happypaw.ua' })
  @Prop({
    type: String,
  })
  email: string;
}

export const FriendSchema = SchemaFactory.createForClass(Friend);
