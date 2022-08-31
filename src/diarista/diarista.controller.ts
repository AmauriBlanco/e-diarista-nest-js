import { Controller, Get, Param, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diarista } from './diarista.entity';

@Controller('diaristas')
export class DiaristaController {
  constructor(
    @InjectRepository(Diarista)
    private diaristaRepository: Repository<Diarista>,
  ) {}
  @Get()
  @Render('listar_diaristas')
  async listarDiaristas() {
    return {
      diaristas: await this.diaristaRepository.find(),
      titulo: 'Lista de Diaristas',
    };
  }

  @Get(':id')
  @Render('detalhes')
  async exibirDiarista(@Param('id') id: number) {
    return {
      diarista: await this.diaristaRepository.findOneBy({ id: id }),
      titulo: 'Diarista',
    };
  }
}
