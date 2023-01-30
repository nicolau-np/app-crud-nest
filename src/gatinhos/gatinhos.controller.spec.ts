import { Test, TestingModule } from '@nestjs/testing';
import { GatinhosController } from './gatinhos.controller';
import { GatinhosService } from './gatinhos.service';

describe('GatinhosController', () => {
  let controller: GatinhosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatinhosController],
      providers: [GatinhosService],
    }).compile();

    controller = module.get<GatinhosController>(GatinhosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
