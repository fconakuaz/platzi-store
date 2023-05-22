import { Body, Controller, Get, Param, Post } from '@nestjs/common'

interface products {
  id: string
  name?: string
  category?: string
}

@Controller('categories')
export class CategoriesController {
  // Dos parámetros
  // http://localhost:3000/categories/cat1/products/12
  @Get(':category/products/:id')
  getCategory(@Param() params: products) {
    return `El id a consultar es ${params.id} y su categoría es ${params.category} `
  }
  // Crear categoría
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear categoría',
      payload
    }
  }
}
