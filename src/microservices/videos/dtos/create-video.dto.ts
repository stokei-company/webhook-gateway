export interface CreateVideoDTO {
  readonly parent: string;
  readonly parentType: string;
  readonly title: string;
  readonly description: string;
  readonly video?: any;
  readonly videoUrl?: string;
  readonly thumbnail?: any;
  readonly watermark?: any;
}
