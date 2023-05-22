import { Body, Controller, Post } from '@nestjs/common'

@Controller('orders')
export class OrdersController {
  // Crear order
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear order',
      payload
    }
  }
}
