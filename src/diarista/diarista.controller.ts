import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
  @Get(':id')
  @Render('home')
  root(@Param('id') id: number) {
    const diaristas = [
      {
        nome: 'Paulo',
      },
      {
        nome: 'Bruna',
      },
    ];
    return { diarista: diaristas[id] };
  }
}
