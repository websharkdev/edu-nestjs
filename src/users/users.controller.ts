import { UsersService } from './users.service'
import { Body, Controller, Get, Post } from '@nestjs/common'

import type { CreateUserDTO } from './dto/create-user.dto'

@Controller('users')

export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post()
  create(@Body() userDTO: CreateUserDTO) {
    return this.usersService.createUser(userDTO)
  }

  @Get()

  getAll() {
    return this.usersService.getAllUsers()
  }
}
