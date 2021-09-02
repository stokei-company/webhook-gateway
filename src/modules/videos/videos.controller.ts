import { Body, Controller, Post, Query } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post('status')
  async changeStatus(@Query() params: any, @Body() body: any) {
    try {
      const queryParams = params || {};
      const bodyParams = body || {};

      return await this.videosService.changeStatus({
        ...queryParams,
        ...bodyParams
      });
    } catch (error) {}
  }
}
