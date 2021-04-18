import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MicroservicesModule } from '~/microservices/microservices.module';

@Module({
  imports: [MicroservicesModule],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
