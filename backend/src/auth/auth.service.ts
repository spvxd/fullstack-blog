import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import e from 'express';
import { log } from 'console';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email)
    try {
      const passwordValidate = await argon2.verify(user.password, password)
      if (user && passwordValidate) {
        return user
      }
    }
    catch (err) {
      throw new UnauthorizedException('Incorrect email or password')

    }


  }

  async login(loginDto: LoginDto) {
    const {id, email} = loginDto;

    return {
      id, email, token: this.jwtService.sign({id: id, email: email}),
    };
  }
}
