import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BreedsModule } from './breeds/breeds.module';
import { CitiesModule } from './cities/cities.module';
import { FriendsModule } from './friends/friends.module';
import { NewsModule } from './news/news.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CitiesModule,
    BreedsModule,
    FriendsModule,
    NewsModule,
  ],
})
export class AppModule {}
