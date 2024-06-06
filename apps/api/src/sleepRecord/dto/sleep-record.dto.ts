import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSleepRecordDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['male', 'female', 'other'])
  @IsNotEmpty()
  gender: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  duration: number;

  @IsDateString()
  date: string;
}
