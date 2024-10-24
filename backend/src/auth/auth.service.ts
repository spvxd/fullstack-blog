import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2'
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }

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
}
