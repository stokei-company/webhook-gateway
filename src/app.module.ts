import { ClassSerializerInterceptor, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { MicroservicesModule } from './microservices/microservices.module';
import { ModulesModule } from './modules/modules.module';
import { HttpExceptionFilter } from './shared/errors/http-exception.filter';
import { CheckExistsXmlMiddleware } from './shared/middlewares/check-exists-xml.middleware';

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
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(CheckExistsXmlMiddleware)
			.forRoutes('*');
	}
}