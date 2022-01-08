import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createuser')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  @Roles(Role.User)
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  @Roles(Role.User)
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('updateuser')
  @Roles(Role.Admin)
  update(@Body('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Delete('deleteuser')
  @Roles(Role.Admin)
  remove(@Body('id') id: number) {
    return this.usersService.remove(+id);
  }
}
