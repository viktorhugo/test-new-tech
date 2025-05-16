import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    EDITOR = 'editor',
}
export class CreateOrderDto {
    @ApiProperty({
        description: 'The full name of the user',
        example: 'Jane Smith',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        description: 'Email address (must be unique in the system)',
        example: 'jane.smith@example.com',
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({
        description: 'The role that determines user permissions',
        enum: UserRole,
        example: UserRole.USER,
        default: UserRole.USER,
    })
    @IsEnum(UserRole)
    role: UserRole;
}


export class OrderResponseDto {
    @ApiProperty({
        description: 'The full name of the user',
        example: 'Jane Smith',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        description: 'Email address (must be unique in the system)',
        example: 'jane.smith@example.com',
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @ApiProperty({
        description: 'The role that determines user permissions',
        enum: UserRole,
        example: UserRole.USER,
        default: UserRole.USER,
    })
    @IsEnum(UserRole)
    role: UserRole;

    @ApiProperty({
        description: 'Configuration settings for the widget',
        example: {
            color: '#FF5733',
            dimensions: { width: 300, height: 200 },
            features: ['rotate', 'resize', 'filter'],
            isActive: true
        }
    })
    config: Record<string, any>;
}