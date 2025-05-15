import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "./user.dto";
import { IsNotEmpty, IsString } from "class-validator";

export class PaginatedProductsResponseDto {
    @ApiProperty({ type: [CreateUserDto] })
    items: CreateUserDto[];
    
    @ApiProperty({ example: 10 })
    count: number;
    
    @ApiProperty({ example: 1 })
    currentPage: number;
    
    @ApiProperty({ example: 5 })
    totalPages: number;
    
    @ApiProperty({ example: 50 })
    total: number;
}

export class PaginationQueryDto {
    @ApiProperty({
            description: 'The id of the user',
            example: 'USER-124',
            required: true,
        })
        @IsString()
        @IsNotEmpty()
        id: string;
}