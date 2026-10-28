import { ReadingStatus } from '../reading-status.enum';

export class UpdateBookStatusDto {
    purchase_date?: Date;

    start_date?: Date;

    finish_date?: Date;

    status?: ReadingStatus;
}