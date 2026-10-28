import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookStatus } from './book-status.entity';
import {Book} from '../books/book.entity';
import { BookStatusService } from './book-status.service';
import { BookStatusController } from './book-status.controller';

@Module({
    imports: [TypeOrmModule.forFeature([BookStatus, Book])],
    providers: [BookStatusService],
    controllers: [BookStatusController],
})
export class BookStatusModule {}