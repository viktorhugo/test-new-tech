import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UserResponseDto } from '../DTO/user.dto';
import { PaginatedProductsResponseDto, PaginationQueryDto } from '../DTO/interactive.dto';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiTags('users')

@Controller('users')
export class SwaggerController {
    userService: any;

    constructor() {}

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ 
        status: HttpStatus.CREATED, 
        description: 'User successfully created',
        type: UserResponseDto
    })
    @ApiResponse({ 
        status: HttpStatus.BAD_REQUEST, 
        description: 'Invalid input data'
    })
    @ApiResponse({ 
        status: HttpStatus.CONFLICT, 
        description: 'Email already exists'
    })
    async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
        return this.userService.create(createUserDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all products with pagination' })
    @ApiResponse({
        status: 200,
        description: 'Return paginated products',
        type: PaginatedProductsResponseDto
    })
    async findAll(@Query() query: PaginationQueryDto): Promise<PaginatedProductsResponseDto> {
        return await this.userService.findAll(query);
    }

    // Deprecated endpoint
    @Get('old-endpoint')
    @ApiOperation({ 
        summary: 'Get data (deprecated)',
        description: 'This endpoint is deprecated and will be removed in v2.0. Use /new-endpoint instead.'
    })
    // @Deprecated()
    oldEndpoint() {
    // Implementation
    }
}


