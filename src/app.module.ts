import { Module } from '@nestjs/common';
import { DiaristaModule } from './diarista/diarista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DiaristaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'luhouse45',
      database: 'curso_nest',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
