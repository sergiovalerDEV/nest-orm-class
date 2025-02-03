import { Body, Controller, Post } from '@nestjs/common';
import { Peliculas } from 'src/entities/pelicula.entity';
import { PeliculasService } from './peliculas.service';

@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculaService: PeliculasService) {}

    @Post()
    async create(@Body() peli: Partial<Peliculas>): Promise<Peliculas> {
        return this.peliculaService.create(peli);
    }
}