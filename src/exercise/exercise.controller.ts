import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  ParseArrayPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ExerciseService } from './exercise.service';
import { IPrimeNumbersResponse } from './interfaces/IPrimeNumbersResponse';
import { Operators } from 'src/functions/simpleCalculator';

@Controller('exercises')
@ApiTags('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get('simple-calculator')
  @ApiQuery({ name: 'operator', enum: Operators })
  async calculate(
    @Query('firstNumber', ParseFloatPipe) firstNumber: string,
    @Query('secondNumber', ParseFloatPipe) secondNumber: string,
    @Query('operator', new ParseEnumPipe(Operators))
    operator: Operators = Operators['+'],
  ): Promise<number> {
    try {
      return this.exerciseService.calculator({
        firstNumber: +firstNumber,
        secondNumber: +secondNumber,
        operator,
      });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('prime-numbers')
  getPrimeNumbers(
    @Query('number', ParseIntPipe) number: string,
  ): IPrimeNumbersResponse {
    try {
      return this.exerciseService.primeNumbers({ number: +number });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('factorial')
  getFactorial(@Query('number', ParseIntPipe) number: string): number {
    try {
      return this.exerciseService.factorial({ number: +number });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('palindrome')
  getPalindrome(@Query('string') string: string): boolean {
    try {
      return this.exerciseService.palindrome({ string });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('table')
  getTable(@Query('number', ParseFloatPipe) number: string): {
    [key: string]: number;
  } {
    try {
      return this.exerciseService.table({ number: +number });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('vowel-counter')
  countVowels(@Query('string') string: string): number {
    try {
      return this.exerciseService.countVowels({ string });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('grade-average')
  @ApiOperation({
    description: 'notas de matérias devem ser numeros, separadas por virgula.',
  })
  getAverage(@Query('grades', ParseArrayPipe) grades: string[]): number {
    try {
      if (grades.some((grade) => isNaN(+grade))) {
        throw new BadRequestException(
          `invalid grade: ${grades.find((grade) => isNaN(+grade))}`,
        );
      }
      const numGrades = grades.map((grade) => +grade);
      return this.exerciseService.getAverage({ grades: numGrades });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }

  @Get('interest-calculation')
  @ApiOperation({
    description: `initialCapital: number (ex: 1000);\nmonthlyInterestRateInPercentage: number(ex: 5[for 5 %]);\ninvestmentTimeInMonths: number (ex: 12);\n`,
  })
  calculateInterest(
    @Query('initialCapital', ParseFloatPipe) initialCapital: string,
    @Query('monthlyInterestRateInPercentage', ParseFloatPipe)
    monthlyInterestRateInPercentage: string,
    @Query('investmentTimeInMonths', ParseIntPipe)
    investmentTimeInMonths: string,
  ): number {
    try {
      return this.exerciseService.calculateInterest({
        initialCapital: +initialCapital,
        monthlyInterestRateInPercentage: +monthlyInterestRateInPercentage,
        investmentTimeInMonths: +investmentTimeInMonths,
      });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.options);
    }
  }
}
