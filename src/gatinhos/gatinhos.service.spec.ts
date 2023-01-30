import { Test, TestingModule } from '@nestjs/testing';
import { GatinhosService } from './gatinhos.service';

describe('GatinhosService', () => {
  let service: GatinhosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatinhosService],
    }).compile();

    service = module.get<GatinhosService>(GatinhosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
