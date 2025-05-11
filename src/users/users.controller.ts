// import { Controller, Get } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './user.entity';

// @Controller('users')
// export class UsersController {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   @Get()
//   async findAll(): Promise<User[]> {
//     return this.userRepository.find();
//   }
// }

import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
