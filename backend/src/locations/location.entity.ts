import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Book, (book) => book.location)
  books: Book[];

  @Column({ length: 255 })
  name: string;

  @Column({type: 'varchar',  length: 50, nullable: true })
  shelf: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  row: string | null;

  @Column({type: 'varchar',  length: 50, nullable: true })
  column: string | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  notes: string | null;

  @CreateDateColumn()
  created_at: Date;
 
  @UpdateDateColumn()
  updated_at: Date;

}