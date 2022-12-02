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
  data = [
    {
      name: '存有與虛無',
      author: '沙特',
      id: 1,
    },
    {
      name: '單子論',
      author: '萊布尼茲',
      id: 2,
    },
    {
      name: '物不遷論',
      author: '僧肇',
      id: 3,
    },
    {
      name: '道德經',
      author: '老子',
      id: 4,
    },
  ];
  @Get()
  getAllDocument(@Response() res) {
    res.status(HttpStatus.OK).json(this.data);
  }

  @Get('/:id')
  getDocument(@Response() res, @Param() param) {
    const resData = this.data.filter((data) => data.id === Number(param.id));
    res.status(HttpStatus.OK).json(resData);
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
