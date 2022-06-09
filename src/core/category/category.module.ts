import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryController from './category.controller';
import CategoryEntity from './category.entity';
import CategoryRepository from './category.repository';
import CategoryService from './category.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [],
})
export default class CategoryModule {}
