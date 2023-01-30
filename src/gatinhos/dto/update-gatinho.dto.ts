import { PartialType } from '@nestjs/mapped-types';
import { CreateGatinhoDto } from './create-gatinho.dto';

export class UpdateGatinhoDto extends PartialType(CreateGatinhoDto) {}
