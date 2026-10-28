import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';
import { Book } from '../books/book.entity';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Book, (book) => book.reviews)
    @JoinColumn({ name: 'book_id' })
    book: Book;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    title: string | null;

    @Column({ type: 'varchar', length: 500, nullable: true })
    body: string | null;

    @Column({ type: 'date', nullable: true })
    reviewed_at: Date | null;

    @CreateDateColumn()
    created_at: Date;
     
    @UpdateDateColumn()
    updated_at: Date;
}