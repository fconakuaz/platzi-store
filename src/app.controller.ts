import { Controller, Get, Query } from '@nestjs/common'
import { AppService } from './app.service'

interface pagination {
  limit: number
  offset: string
  page?: number
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Nuevo'
  }

  // Con una query
  // http://localhost:3000/products?limit=2&offset=12
  // http://localhost:3000/products?limit=2&offset=12&page=2
  @Get('pagination')
  getPagination(@Query() params: pagination) {
    const { limit, offset, page } = params
    return `El límite es: ${limit}, el offset es: ${offset}, la página es: ${
      page || 1
    } `
  }
}
