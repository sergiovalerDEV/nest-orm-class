import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { validationSchema } from './config/validate';
import { PeliculasModule } from './peliculas/peliculas.module';
import { GenerosModule } from './generos/generos.module';

@Module({
  // Nombre de archivo de variables
  // envFilePath: '.prod.env',
  // objeto de variables de entorno
  // Accesible desde cualquier módulo
  // Variables válidas y aceptadas antes de empezar
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
   PeliculasModule,
   DatabaseModule,
   GenerosModule,
],
controllers:[AppController],
providers:[AppService],
})
export class AppModule {}
