import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { Book } from '../books/book.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>,

        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ) {}

    async create(
        createReviewDto: CreateReviewDto,
    ): Promise<Review> {
        // ① book_idからBookを取得
        const book = await this.bookRepository.findOneBy({
            id: createReviewDto.book_id,
        });
        // ② Bookが存在するか確認
        if (!book) {
            throw new NotFoundException(`Book with ID ${createReviewDto.book_id} not found`);
        }
        // ③ Reviewを作成
        const review = this.reviewRepository.create({
            book: book,
            rating: createReviewDto.rating,
            title: createReviewDto.title,
            body: createReviewDto.body,
            reviewed_at: createReviewDto.reviewed_at,
        });
        // ④ 保存
        return this.reviewRepository.save(review);
    }
    
}
