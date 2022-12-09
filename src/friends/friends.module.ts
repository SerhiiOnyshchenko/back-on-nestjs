import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Friend, FriendSchema } from 'src/db-schemas/friends.schema';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
  imports: [
    MongooseModule.forFeature(
      [{ name: Friend.name, schema: FriendSchema }]
    ),
  ],
})
export class FriendsModule {}
