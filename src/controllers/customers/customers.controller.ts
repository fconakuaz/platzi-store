import { Body, Controller, Post } from '@nestjs/common'

@Controller('customers')
export class CustomersController {
  // Crear customer
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear customer',
      payload
    }
  }
}
