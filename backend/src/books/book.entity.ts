import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book {
 @PrimaryGeneratedColumn()
 id: number;
 
 @Column({length: 20, nullable: true })
 isbn: string | null;

 @Column({ length: 255 })
 title: string;
 
 @Column({ length: 255, nullable: true })
 subtitle: string | null;
 
 @Column({ length: 255, nullable: true })
 author_main: string | null;
 
 @Column({ length: 255, nullable: true })
 publisher: string | null;
 
 @Column({ type: 'date', nullable: true })
 published_at: Date | null;
 
 @Column({ length: 50, nullable: true })
 format: string | null;
 
 @Column({ nullable: true })
 page_count: number | null;
 
 @Column({ length: 255, nullable: true, unique: true })
 qr_token: string | null;
 
 @Column({ type: 'text', nullable: true })
 memo: string | null;
 
 @Column({ nullable: true })
 location_id: number | null;
 
 @CreateDateColumn()
 created_at: Date;
 
 @UpdateDateColumn()
 updated_at: Date;

}