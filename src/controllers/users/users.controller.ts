import { Body, Controller, Post } from '@nestjs/common'

@Controller('users')
export class UsersController {
  // Crear user
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de user',
      payload
    }
  }
}
