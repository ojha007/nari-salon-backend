import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ConfigModule from './modules/config.module';
import ConfigService from './modules/config.service';
import { importModule } from './utils/fileToClass';
import ResponseInterceptor from '../src/interceptors/ResponseInterceptor';
import { HttpExceptionHandler } from './handlers/HttpException';
import { JwtAuthGuard } from './core/auth/guard/jwt-auth.guard';

let config = new ConfigService('.env.local');
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      ...config.getTypeORMRoot(),
      autoLoadEntities: true,
    }),
    ...importModule(),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionHandler,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
