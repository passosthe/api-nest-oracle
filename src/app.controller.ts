import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';


@Controller( 'users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }
}
