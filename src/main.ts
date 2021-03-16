import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { SERVER_HOST, SERVER_PORT } from './environments';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());
  app.use(cookieParser());
  //app.use(csurf({ cookie: true }));
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
  
  const logger = new Logger('Webhook - Gateway');

  await app.listen(SERVER_PORT, SERVER_HOST);
  logger.log(`Server started at (${await app.getUrl()})`);
})();