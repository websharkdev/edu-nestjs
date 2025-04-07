import { Controller, Get } from '@nestjs/common'

// eslint-disable-next-line ts/consistent-type-imports
import { AppService } from './app.service'

@Controller('/api')

export class AppController {
  constructor(private app: AppService) { }

  @Get('/users')
  getUsers() {
    return this.app.getUsers()
  }
}
