import { Controller, Get, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diarista } from './diarista.entity';

@Controller('diarista')
export class DiaristaController {
  constructor(
    @InjectRepository(Diarista)
    private diaristaRepository: Repository<Diarista>,
  ) {}
  @Get()
  @Render('listar_diaristas')
  async listarDiaristas() {
    return { diaristas: await this.diaristaRepository.find() };
  }
}
