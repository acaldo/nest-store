import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { UsersService } from '../services/users.service';
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getProducts() {
    return this.usersService.findAll();
  }
  @Get(':productId')
  getOne(@Param('productId', MongoIdPipe) productId: string) {
    return this.usersService.findOne(productId);
  }
  @Get(':productId/orders')
  getOrders(@Param('productId', MongoIdPipe) productId: string) {
    return this.usersService.getOrderByUser(productId);
  }
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id', MongoIdPipe) id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.AMBIGUOUS)
  delete(@Param('id', ParseIntPipe) id: string) {
    return this.usersService.delete(id);
  }
}
