import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentController } from './document/document.controller';
import { CatsController } from './cats/cats.controller';
import { DocumentService } from './document/document.service';

@Module({
  imports: [],
  controllers: [AppController, DocumentController, CatsController],
  providers: [AppService, DocumentService],
})
export class AppModule {}
