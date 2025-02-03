import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peliculas } from 'src/entities/pelicula.entity';
import { Genero } from 'src/entities/genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Peliculas, Genero])],
  controllers: [PeliculasController],
  providers: [PeliculasService],
  exports: [PeliculasService],
})
export class PeliculasModule {}