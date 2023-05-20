import { Controller, Get, Param, Post } from '@nestjs/common'

interface products {
  id: string
  name?: string
  category?: string
}

@Controller('products')
export class ProductsController {
  @Post(':id')
  postProduct(@Param() params: products) {
    return `El id a actualizar es ${params.id} `
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return `El id a consultar es ${id} `
  }
}
