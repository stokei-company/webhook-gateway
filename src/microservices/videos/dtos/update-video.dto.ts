import { VideoStatus } from '../enums/video-status.enum';

export interface UpdateVideoDTO {
  readonly id: string;
  readonly appId?: string;
  readonly title?: string;
  readonly description?: string;
  readonly status?: VideoStatus;
  readonly volume?: number;
  readonly duration?: number;
  readonly sizes?: string[];
  readonly assetId?: string;
  readonly thumbnail?: any;
  readonly watermark?: any;
}
