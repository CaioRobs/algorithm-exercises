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
  calculator({ firstNumber, secondNumber, operator }: CalculateDto): number {
    return simpleCalculator(firstNumber, secondNumber, operator);
  }

  primeNumbers({ number }: PrimeNumbersDto): IPrimeNumbersResponse {
    return {
      number,
      isPrime: isPrimeNumber(number),
      firstPrimeNumbers: firstTenPrimes,
    };
  }

  factorial({ number }: FactorialDto): number {
    return factorial(number);
  }

  palindrome({ string }: PalindromeDto): boolean {
    return isPalindrome(string);
  }

  table({ number }: TableDto): { [key: string]: number } {
    return getTable(number);
  }

  countVowels({ string }: VowelCounterDto): number {
    return countVowels(string);
  }

  getAverage({ grades }: GradeAverageDto): number {
    return getAverage(grades);
  }

  calculateInterest({
    initialCapital,
    monthlyInterestRateInPercentage,
    investmentTimeInMonths,
  }: InterestCalculationDto): number {
    return calculateInvestmentFinalValue(
      initialCapital,
      monthlyInterestRateInPercentage,
      investmentTimeInMonths,
    );
  }
}
