import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    OneToOne,
    JoinColumn
 } from 'typeorm';

import { ReadingStatus } from './reading-status.enum';
import { Book } from '../books/book.entity';

@Entity()
export class BookStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Book, (book) => book.book_status)
    @JoinColumn({ name: 'book_id' })
    book: Book;

    @Column({ type: 'date', nullable: true })
    purchase_date: Date | null;

    @Column({ type: 'date', nullable: true })
    start_date: Date | null;

    @Column({ type: 'date', nullable: true })
    finish_date: Date | null;

    @Column({
        type: 'enum',
        enum: ReadingStatus,
    })
    status: ReadingStatus;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}