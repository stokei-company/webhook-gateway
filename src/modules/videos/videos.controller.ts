import { Body, Controller, Post, Query } from '@nestjs/common';
import { VideoStatus } from '~/microservices/videos/enums/video-status.enum';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post('status')
  changeStatus(@Query() params: any, @Body() body: any) {
    try {
      const queryParams = params || {};
      const bodyParams = body || {};

      return this.videosService.changeStatus({
        ...queryParams,
        ...bodyParams
      });
    } catch (error) {}
  }
}
