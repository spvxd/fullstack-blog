
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service'
import { log } from 'console';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'login' });
    }

    async validate(login: string, password: string) {
        const user = await this.authService.validateUser(login, password);
        if (!user) {
            throw new UnauthorizedException('Incorrect email or password')
        }
        return user;
    }
}
