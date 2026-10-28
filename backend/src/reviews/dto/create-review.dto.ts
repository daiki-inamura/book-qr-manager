export class CreateReviewDto {
    book_id: number;

    rating: number;

    title?: string;

    body?: string;

    reviewed_at?: Date;
}