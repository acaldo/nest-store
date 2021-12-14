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
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { BrandsService } from '../services/brands.service';
@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getProducts() {
    return this.brandsService.findAll();
  }
  @Get(':productId')
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.brandsService.findOne(productId);
  }
  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.AMBIGUOUS)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
