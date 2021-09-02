import { Module } from '@nestjs/common';
import { VideosClient } from './videos.client';
import { VideosMicroserviceService } from './videos.service';

@Module({
  imports: [VideosClient],
  providers: [VideosMicroserviceService],
  exports: [VideosMicroserviceService]
})
export class VideosMicroserviceModule {}
