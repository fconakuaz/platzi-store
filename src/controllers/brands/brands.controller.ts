import { Body, Controller, Post } from '@nestjs/common'

@Controller('brands')
export class BrandsController {
  // Crear marca
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear marca',
      payload
    }
  }
}
