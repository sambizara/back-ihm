import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MouvementstocksService } from './mouvementstocks.service';
import { CreateMouvementstockDto } from './dto/create-mouvementstock.dto';
import { UpdateMouvementstockDto } from './dto/update-mouvementstock.dto';

@Controller('mouvementstocks')
export class MouvementstocksController {
  constructor(private readonly mouvementstocksService: MouvementstocksService) {}

  @Post()
  create(@Body() createMouvementstockDto: CreateMouvementstockDto) {
    return this.mouvementstocksService.create(createMouvementstockDto);
  }

  @Get()
  findAll() {
    return this.mouvementstocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mouvementstocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMouvementstockDto: UpdateMouvementstockDto) {
    return this.mouvementstocksService.update(+id, updateMouvementstockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mouvementstocksService.remove(+id);
  }
}
