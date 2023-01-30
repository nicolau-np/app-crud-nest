import { Injectable } from '@nestjs/common';
import { CreateGatinhoDto } from './dto/create-gatinho.dto';
import { UpdateGatinhoDto } from './dto/update-gatinho.dto';

@Injectable()
export class GatinhosService {
  create(createGatinhoDto: CreateGatinhoDto) {
    return 'This action adds a new gatinho';
  }

  findAll() {
    return `This action returns all gatinhos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gatinho`;
  }

  update(id: number, updateGatinhoDto: UpdateGatinhoDto) {
    return `This action updates a #${id} gatinho`;
  }

  remove(id: number) {
    return `This action removes a #${id} gatinho`;
  }
}
