import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

import { IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  // Validate that the email property is not empty and is in a valid email format.
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  // Validate that the phone property is not empty and is a valid phone number format for India.
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsPhoneNumber('IN', { message: 'Invalid phone number format for India' })
  phone: string;

  // Validate that the firstName property is not empty and is a string.
  @IsNotEmpty({ message: 'First name is required' })
  @IsString({ message: 'First name should be a string' })
  firstName: string;

  // Validate that the lastName property is not empty and is a string.
  @IsNotEmpty({ message: 'Last name is required' })
  @IsString({ message: 'Last name should be a string' })
  lastName: string;

  // Validate that the password property is not empty and is a strong password.
  // A strong password should have a minimum length of 8 characters,
  // at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special symbol.
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minUppercase: 1,
      minLowercase: 1, // Added requirement for at least 1 lowercase letter
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'Password is not strong enough' },
  )
  password: string;
}

export class AuthenticateUserDto {
  // Validate that the password property is not empty and is a strong password.
  // A strong password should have a minimum length of 8 characters,
  // at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special symbol.
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minUppercase: 1,
      minLowercase: 1, // Added requirement for at least 1 lowercase letter
      minNumbers: 1,
      minSymbols: 1,
    },
    { message: 'Password is not strong enough' },
  )
  password: string;

  // Validate that the email property is not empty and is in a valid email format.
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}