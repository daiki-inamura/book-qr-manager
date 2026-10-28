import { Body, Controller, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.entity';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    @Post()
    async create(
        @Body() createReviewDto: CreateReviewDto,
    ): Promise<Review> {
        return this.reviewsService.create(createReviewDto);
    }

}
