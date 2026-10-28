import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {BookStatus} from './book-status.entity';
import {Book} from '../books/book.entity';
import {CreateBookStatusDto} from './dto/create-book-status.dto';
import {UpdateBookStatusDto} from './dto/update-book-status.dto';

@Injectable()
export class BookStatusService {
    constructor(
        @InjectRepository(BookStatus)
        private readonly bookStatusRepository: Repository<BookStatus>,

        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) {}

    async create(
        createBookStatusDto: CreateBookStatusDto,
    ): Promise<BookStatus> {
        // ① book_idからBookを取得
        const book = await this.bookRepository.findOneBy({
            id: createBookStatusDto.book_id,
        });
        // ② Bookが存在するか確認
        if (!book) {
            throw new NotFoundException(`Book with ID ${createBookStatusDto.book_id} not found`);
        }
        // ③ BookStatusを作成
        const bookStatus = this.bookStatusRepository.create({
            book: book,
            purchase_date: createBookStatusDto.purchase_date,
            start_date: createBookStatusDto.start_date,
            finish_date: createBookStatusDto.finish_date,
            status: createBookStatusDto.status,
        });
        // ④ 保存
        return this.bookStatusRepository.save(bookStatus);
    }

    async findAll(): Promise<BookStatus[]> {
        return this.bookStatusRepository.find({
            relations: {
                book: true,
            }
        });
    }

    async findOne(id: number): Promise<BookStatus> {
        const bookStatus = await this.bookStatusRepository.findOne({
            where: { id },
            relations: {
                book: true,
            }
        });
        if (!bookStatus) {
            throw new NotFoundException(`BookStatus with ID ${id} not found`);
        }
        return bookStatus;
    }

    async update(
        id: number,
        updateBookStatusDto: UpdateBookStatusDto,
    ): Promise<BookStatus> {
        const bookStatus = await this.findOne(id);
        Object.assign(bookStatus, updateBookStatusDto);
        return this.bookStatusRepository.save(bookStatus);
    }

    async remove(id: number): Promise<void> {
        const bookStatus = await this.findOne(id);
        await this.bookStatusRepository.remove(bookStatus);
    }
}