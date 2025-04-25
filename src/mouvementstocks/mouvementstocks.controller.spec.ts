import { Test, TestingModule } from '@nestjs/testing';
import { MouvementstocksController } from './mouvementstocks.controller';
import { MouvementstocksService } from './mouvementstocks.service';

describe('MouvementstocksController', () => {
  let controller: MouvementstocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MouvementstocksController],
      providers: [MouvementstocksService],
    }).compile();

    controller = module.get<MouvementstocksController>(MouvementstocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
