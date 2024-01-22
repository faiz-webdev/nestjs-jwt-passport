import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser = [
  {
    id: 1,
    username: 'anson',
    password: '12345',
  },
  {
    id: 2,
    username: 'john',
    password: '12345',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUser.find((user) => (user.username = username));
    if (!findUser) return null;

    if (password === findUser.password) {
      const { password, ...user } = findUser;
      console.log(user);

      return this.jwtService.sign(user);
    }
  }
}
