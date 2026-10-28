import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import {BookStatusService} from "./book-status.service";
import {CreateBookStatusDto} from "./dto/create-book-status.dto";
import {BookStatus} from "./book-status.entity";
import {UpdateBookStatusDto} from "./dto/update-book-status.dto";

@Controller('book-statuses')
export class BookStatusController {
    constructor(private readonly bookStatusService: BookStatusService) {}

    @Post()
    async create(
        @Body() createBookStatusDto: CreateBookStatusDto,
    ): Promise<BookStatus> {
        return this.bookStatusService.create(createBookStatusDto);
    }

    @Get()
    async findAll(): Promise<BookStatus[]> {
        return this.bookStatusService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<BookStatus> {
        return this.bookStatusService.findOne(Number(id));
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateBookStatusDto: UpdateBookStatusDto,
    ): Promise<BookStatus> {
        return this.bookStatusService.update(Number(id), updateBookStatusDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.bookStatusService.remove(Number(id));
    }
}