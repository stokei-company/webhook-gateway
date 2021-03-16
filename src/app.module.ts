import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MicroservicesModule } from './microservices/microservices.module';
import { ModulesModule } from './modules/modules.module';
import { HttpExceptionFilter } from './shared/errors/http-exception.filter';

@Module({
  imports: [
    MicroservicesModule,
    ModulesModule,
  ],
  controllers: [],
  providers: [
		{
		  provide: APP_INTERCEPTOR,
		  useClass: ClassSerializerInterceptor,
		},
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule { }
