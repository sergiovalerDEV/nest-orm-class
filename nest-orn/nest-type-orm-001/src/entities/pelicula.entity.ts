import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Genero } from './genero.entity'; // Asegúrate de que esta entidad exista y esté importada correctamente

@Entity('peliculas1')
export class Peliculas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  titulo: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column({ type: 'int', nullable: true })
  anio: number;

  @ManyToOne(() => Genero, genero => genero.peliculas, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'genero_id' })
  genero: Genero;

  @Column({ length: 255, nullable: true })
  imagen_url: string;
 
}

// 
/*
┌───────────────┐                ┌───────────────────────┐
│   Genero1     │  1          N  │     Peliculas1        │
├───────────────┤◄──────────────►│ id (PK)               │
│ id (PK)       │                │ titulo                │
│ titulo        │                │ descripcion           │
└───────────────┘                │ anio                  │
                                 │ genero_id (FK)        │
                                 │ imagen_url            │
                                 └───────────────────────┘

*/