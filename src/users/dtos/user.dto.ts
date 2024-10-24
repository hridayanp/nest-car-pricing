import { Expose } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;
}
