import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Location } from '../locations/location.entity';
import { BookStatus } from '../book-statuses/book-status.entity';
import { Review } from '../reviews/review.entity';

@Entity()
export class Book {
 @OneToOne(() => BookStatus, (bookStatus) => bookStatus.book)
 book_status: BookStatus;

 @OneToMany(() => Review, (review) => review.book)
 reviews: Review[];

 @PrimaryGeneratedColumn()
 id: number;
 
 @Column({type: 'varchar', length: 20, nullable: true })
 isbn: string | null;

 @Column({ type: 'varchar', length: 255 })
 title: string;
 
 @Column({ type: 'varchar', length: 255, nullable: true })
 subtitle: string | null;
 
 @Column({ type: 'varchar', length: 255, nullable: true })
 author_main: string | null;
 
 @Column({ type: 'varchar', length: 255, nullable: true })
 publisher: string | null;
 
 @Column({ type: 'date', nullable: true })
 published_at: Date | null;
 
 @Column({type: 'varchar',  length: 50, nullable: true })
 format: string | null;
 
 @Column({ type: 'int', nullable: true })
 page_count: number | null;
 
 @Column({ type: 'varchar', length: 255, nullable: true, unique: true })
 qr_token: string | null;
 
 @Column({ type: 'text', nullable: true })
 memo: string | null;

 @ManyToOne(() => Location, { nullable: true })
 @JoinColumn({ name: 'location_id' })
 location: Location | null;
 
 @CreateDateColumn()
 created_at: Date;
 
 @UpdateDateColumn()
 updated_at: Date;

}