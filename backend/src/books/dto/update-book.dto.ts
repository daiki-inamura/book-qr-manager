export class UpdateBookDto {
    isbn?: string;

    title?: string;

    subtitle?: string;
    
    author_main?: string;

    publisher?: string;

    published_at?: Date;

    format?: string;

    page_count?: number;
    
    // qr_token?: number;

    memo?: string;

    // location_id?: number;    
}
