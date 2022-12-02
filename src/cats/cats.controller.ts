import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor() {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
