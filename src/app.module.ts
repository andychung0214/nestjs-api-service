import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentController } from './document/document.controller';
import { CatsController } from './cats/cats.controller';
import { DocumentService } from './document/document.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, DocumentController, CatsController],
  providers: [AppService, DocumentService],
})
export class AppModule {}
