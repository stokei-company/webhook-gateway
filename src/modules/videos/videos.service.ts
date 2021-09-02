import { Injectable } from '@nestjs/common';
import { VideoStatus } from '~/microservices/videos/enums/video-status.enum';
import { VideosMicroserviceService } from '~/microservices/videos/videos.service';
import Mux from '@mux/mux-node';

@Injectable()
export class VideosService {
  constructor(private readonly videosService: VideosMicroserviceService) {}

  // Using MUX Encoder
  async changeStatus(data: any) {
    try {
      if (!data) {
        throw new Error('Data not found!');
      }
      const assetId = data?.object?.type === 'asset' ? data?.object?.id : null;
      if (!assetId) {
        throw new Error('MuxAsset not found!');
      }
      const mux = new Mux();
      const asset = await mux.Video.Assets.get(assetId);
      if (!asset) {
        throw new Error('MuxAsset not found!');
      }

      const video = await this.videosService.findById(asset.passthrough);
      if (!video) {
        throw new Error('Video not found!');
      }

      const playbackId =
        asset.playback_ids?.length > 0 ? asset.playback_ids[0].id : null;

      let status = null;
      if (asset.status === 'ready') {
        status = VideoStatus.AVAILABLE;
      } else if (asset.status === 'errored') {
        status = VideoStatus.CANCELED;
      }

      const duration = asset.duration;

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
      return {
        ok: false,
        error
      };
    }
  }
}
