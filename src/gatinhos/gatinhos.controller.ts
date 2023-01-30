import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GatinhosService } from './gatinhos.service';
import { CreateGatinhoDto } from './dto/create-gatinho.dto';
import { UpdateGatinhoDto } from './dto/update-gatinho.dto';

@Controller('gatinhos')
export class GatinhosController {
  constructor(private readonly gatinhosService: GatinhosService) {}

  @Post()
  create(@Body() createGatinhoDto: CreateGatinhoDto) {
    return this.gatinhosService.create(createGatinhoDto);
  }

  @Get()
  findAll() {
    return this.gatinhosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gatinhosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGatinhoDto: UpdateGatinhoDto) {
    return this.gatinhosService.update(+id, updateGatinhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gatinhosService.remove(+id);
  }
}
