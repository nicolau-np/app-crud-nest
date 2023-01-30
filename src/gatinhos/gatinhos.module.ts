import { Module } from '@nestjs/common';
import { GatinhosService } from './gatinhos.service';
import { GatinhosController } from './gatinhos.controller';

@Module({
  controllers: [GatinhosController],
  providers: [GatinhosService]
})
export class GatinhosModule {}
