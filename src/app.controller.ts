import { Controller, Get, Param, Post, Query } from '@nestjs/common'
import { AppService } from './app.service'

interface products {
  id: string
  name?: string
  category?: string
}

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

  @Post('products/:id')
  postProduct(@Param() params: products) {
    return `El id a actualizar es ${params.id} `
  }

  @Get('products/:id')
  getProduct(@Param('id') id: number) {
    return `El id a consultar es ${id} `
  }

  // Dos parámetros
  @Get('categories/:category/products/:id')
  getCategory(@Param() params: products) {
    return `El id a consultar es ${params.id} y su categoría es ${params.category} `
  }

  // Con una query
  // http://localhost:3000/products?limit=2&offset=12
  // http://localhost:3000/products?limit=2&offset=12&page=2
  @Get('products')
  getProducts(@Query() params: pagination) {
    const { limit, offset, page } = params
    return `El límite es: ${limit}, el offset es: ${offset}, la página es: ${
      page || 1
    } `
  }
}
