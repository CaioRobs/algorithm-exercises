import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate';
import { PrimeNumbersDto } from './dto/prime-numbers';
import { IPrimeNumbersResponse } from './interfaces/IPrimeNumbersResponse';
import { FactorialDto } from './dto/factorial';
import { PalindromeDto } from './dto/palindrome';
import { TableDto } from './dto/table';
import { VowelCounterDto } from './dto/vowel-counter';
import { GradeAverageDto } from './dto/grade-average';
import { InterestCalculationDto } from './dto/interest-calculation';
import { simpleCalculator } from 'src/functions/simpleCalculator';
import { firstTenPrimes, isPrimeNumber } from 'src/functions/primeNumbers';
import { factorial } from 'src/functions/factorial';
import { isPalindrome } from 'src/functions/isPalindrome';
import { getTable } from 'src/functions/getTable';
import { countVowels } from 'src/functions/vowelCounter';
import { calculateInvestmentFinalValue } from 'src/functions/interestCalculation';
import { getAverage } from 'src/functions/gradeAverage';

@Injectable()
export class ExerciseService {
  calculator(body: CalculateDto): number {
    return simpleCalculator(body.firstNumber, body.secondNumber, body.operator);
  }

  primeNumbers(body: PrimeNumbersDto): IPrimeNumbersResponse {
    return {
      number: body.number,
      isPrime: isPrimeNumber(body.number),
      firstPrimeNumbers: firstTenPrimes,
    };
  }

  factorial(body: FactorialDto): number {
    return factorial(body.number);
  }

  palindrome(body: PalindromeDto): boolean {
    return isPalindrome(body.string);
  }

  table(body: TableDto): { [key: string]: number } {
    return getTable(body.number);
  }

  countVowels(body: VowelCounterDto): number {
    return countVowels(body.string);
  }

  getAverage(body: GradeAverageDto): number {
    return getAverage(body.grades);
  }

  calculateInterest(body: InterestCalculationDto): number {
    return calculateInvestmentFinalValue(
      body.initialCapital,
      body.monthlyInterestRateInPercentage,
      body.investmentTimeInMonths,
    );
  }
}
