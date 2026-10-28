import { ReadingStatus } from '../reading-status.enum';

export class CreateBookStatusDto {
    book_id: number;
    
    purchase_date?: Date;

    start_date?: Date;

    finish_date?: Date;

    status: ReadingStatus;
}