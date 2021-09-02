import { VideoStatus } from '../enums/video-status.enum';

export interface VideoModel {
  readonly object: string;
  readonly id: string;
  readonly url: string;
  readonly parent: string;
  readonly parentType: string;
  readonly title: string;
  readonly description?: string;
  readonly status?: VideoStatus;
  readonly filename?: string;
  readonly volume?: number;
  readonly duration?: number;
  readonly sizes?: string[];
  readonly externalVideo: boolean;
  readonly updatedAt?: string;
  readonly createdAt: string;
}
