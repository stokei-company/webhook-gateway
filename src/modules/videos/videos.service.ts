import { Injectable, Logger } from '@nestjs/common';
import { VideoStatus } from '~/microservices/videos/enums/video-status.enum';
import { VideosMicroserviceService } from '~/microservices/videos/videos.service';
import Mux from '@mux/mux-node';

@Injectable()
export class VideosService {
  constructor(private readonly videosService: VideosMicroserviceService) {}

  // Using MUX Encoder
  async changeStatus(data: any) {
    const logger = new Logger(VideosService.name);
    try {
      if (!data) {
        throw new Error('Data not found!');
      }
      const assetId = data?.object?.type === 'asset' ? data?.object?.id : null;
      if (!assetId) {
        throw new Error('MuxAsset not found!');
      }
      const videoId = data.data?.passthrough || data.passthrough;
      let statusBody = data.data?.status || data.status;

      const mux = new Mux();
      let asset = null;
      try {
        asset = await mux.Video.Assets.get(assetId);
      } catch (error) {}

      const playbackId =
        asset?.playback_ids?.length > 0 ? asset?.playback_ids[0].id : null;

      const video = await this.videosService.findById(videoId);
      if (!video) {
        throw new Error('Video not found!');
      }

      let status = null;
      if (statusBody === 'ready') {
        status = VideoStatus.AVAILABLE;
      } else if (statusBody === 'errored' || asset.errors) {
        status = VideoStatus.CANCELED;
      }

      const duration = data.data?.duration || data.duration;

      return {
        ok: await this.videosService.update({
          id: video.id,
          status,
          duration,
          assetId: playbackId
        }),
        status
      };
    } catch (error) {
      logger.error(JSON.stringify({ error }));

      return {
        ok: false,
        error
      };
    }
  }
}
