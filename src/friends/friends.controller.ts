import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Friend } from 'src/db-schemas/friends.schema';
import { FriendsService } from './friends.service';

@ApiTags('Friends')
@Controller('friends')
export class FriendsController {
  constructor(private friendsService: FriendsService) {}

  @ApiOperation({ summary: 'Get array friends' })
  @ApiResponse({ status: 200, type: [Friend] })
  @Get()
  findAll() {
    return this.friendsService.findAll();
  }
}
