import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function start() {
  // eslint-disable-next-line node/no-process-env
  const PORT = process.env.PORT || 3001
  const app = await NestFactory.create(AppModule)
  // eslint-disable-next-line no-console
  await app.listen(PORT, () => console.log(`Server Started at port:`, PORT))
}

start()
