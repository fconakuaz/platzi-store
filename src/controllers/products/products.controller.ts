import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put
} from '@nestjs/common'

interface product {
  id?: string
  name: string
  price?: number
  category?: string
}

@Controller('products')
export class ProductsController {
  @Post(':id')
  postProduct(@Param() params: product) {
    return {
      message: `El id a actualizar es ${params.id} `
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('id') id: number) {
    return {
      message: `El id a consultar es ${id} `
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `El id a eliminar es ${id} `
    }
  }

  @Post()
  create(@Body() payload: product) {
    return {
      message: 'Acción de crear',
      payload
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: product) {
    return {
      message: `El id a actualizar es ${id} `,
      id,
      payload
    }
  }
}
