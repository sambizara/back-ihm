import { Test, TestingModule } from '@nestjs/testing';
import { MouvementstocksService } from './mouvementstocks.service';

describe('MouvementstocksService', () => {
  let service: MouvementstocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MouvementstocksService],
    }).compile();

    service = module.get<MouvementstocksService>(MouvementstocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
