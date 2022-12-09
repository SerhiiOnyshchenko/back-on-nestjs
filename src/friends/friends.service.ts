import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Friend, FriendDocument } from 'src/db-schemas/friends.schema';

@Injectable()
export class FriendsService {
  constructor(
    @InjectModel(Friend.name)
    private friendModule: Model<FriendDocument>
  ) {}
  async findAll(): Promise<Friend[]> {
    const friends = await this.friendModule.find().limit(10);
    return friends;
  }
}
