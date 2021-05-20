import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ServiceMicroservice } from '~/shared/abstracts/service.microservice';
import { VIDEOS_PATTERN_NAME, VIDEOS_SERVICE } from './constants';
import { CreateVideoDTO } from './dtos/create-video.dto';
import { UpdateVideoDTO } from './dtos/update-video.dto';
import { VideoModel } from './models/video.model';

@Injectable()
export class VideosMicroserviceService extends ServiceMicroservice {
    constructor(
        @Inject(VIDEOS_SERVICE)
        client: ClientProxy
    ) {
        super({
            client,
            prefixPatternName: VIDEOS_PATTERN_NAME
        });
    }

    async create(data: CreateVideoDTO): Promise<VideoModel> {
        return await this.send(this.createPatternName('create'), data);
    }

    async update(data: UpdateVideoDTO): Promise<boolean> {
        return await this.send(this.createPatternName('update'), data);
    }

    async findById(data: string): Promise<VideoModel> {
        return await this.send(this.createPatternName('findById'), data);
    }

    async findByFilename(data: string): Promise<VideoModel> {
        return await this.send(this.createPatternName('findByFilename'), data);
    }

    async findAllParent(data: { parent: string, parentType: string }): Promise<VideoModel[]> {
        return await this.send(this.createPatternName('findByParent'), data);
    }

    async findByIds(data: string[]): Promise<VideoModel[]> {
        return await this.send(this.createPatternName('findByIds'), data);
    }
}
