import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatinhosModule } from './gatinhos/gatinhos.module';

@Module({
  imports: [GatinhosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
