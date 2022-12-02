import { ParseIntPipe } from '../pipe/parse-int/parse-int.pipe';
import { DocumentService } from './document.service';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';

@Controller('document')
export class DocumentController {
  constructor(private documentService: DocumentService) {}

  @Get()
  getAllDocument(@Response() res) {
    this.documentService.getDocumentData().subscribe((data) => {
      res.status(HttpStatus.OK).json(data);
    });
  }

  @Get('/:id')
  getDocument(@Param('id', new ParseIntPipe()) id, @Response() res) {
    this.documentService.getDocumentData().subscribe((data) => {
      const resData = data.filter((data) => data.id === id);
      res.status(HttpStatus.OK).json(resData);
    });
  }

  @Post()
  addDocument(@Response() res, @Body() document) {
    res.status(HttpStatus.CREATED).json(document);
  }

  @Patch()
  updateDocument(@Response() res, @Body() document) {
    res.status(HttpStatus.CREATED).json(document);
  }

  @Delete()
  deleteDocument(@Response() res, @Body() document) {
    res.status(HttpStatus.CREATED).json(document);
  }
}
