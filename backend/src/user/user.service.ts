import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {

  }
  async create(createUserDto: CreateUserDto) {
    const existUserEmail = await this.userRepository.findOne({ where: { email: createUserDto.email } })
    if (existUserEmail) throw new BadRequestException('This email is already taken')
      const existUsername = await this.userRepository.findOne({ where: { username: createUserDto.username } })
    if (existUsername) throw new BadRequestException('This username is already taken')
    const newUser = await this.userRepository.save({
      email: createUserDto.email,
      username: createUserDto.username,
      password: await argon2.hash(createUserDto.password)
    })
    return newUser;
  }



  async findOne(login: string) {
    const user = login.includes('@') ? await this.userRepository.findOne({ where: { email: login } }) : await this.userRepository.findOne({ where: { username: login } });
    return user
  }




}
