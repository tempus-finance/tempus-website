import { isZeroString } from '../utils/isZeroString';
import { reverseString } from '../utils/reverseString';

const multiplierLookup = [
  { value: 1e18, symbol: 'Q' },
  { value: 1e15, symbol: 'q' },
  { value: 1e12, symbol: 'T' },
  { value: 1e9, symbol: 'B' },
  { value: 1e6, symbol: 'M' },
  { value: 1e3, symbol: 'k' },
  { value: 1, symbol: '' },
];

const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

class NumberUtils {
  static formatWithMultiplier(value: any, precision: number = 0): string {
    const sanitizedValue = Number(value);
    const multiplier = multiplierLookup.find((item) => Math.abs(sanitizedValue) >= item.value);

    if (sanitizedValue > 0 && sanitizedValue < 1) {
      // Adding 2 to precision so that '0.' part of the number is ignored when slicing it
      return sanitizedValue.toString().slice(0, precision + 2);
    }

    return multiplier
      ? `${(sanitizedValue / multiplier.value).toFixed(precision).replace(regex, '$1')}${multiplier.symbol}`
      : '0';
  }

  static formatToCurrency(value: string, numberOfDecimals?: number, symbol?: string): string {
    if (!value || isZeroString(value)) {
      return `${symbol || ''}0`;
    }

    const [integerPart, fractionalPart] = value.split('.');

    let integerPartSeparatorsAdded: string;

    const integerPartReversed = reverseString(integerPart);
    const integerPartReversedSplitted = integerPartReversed.match(/.{1,3}/g);
    if (integerPartReversedSplitted) {
      const integerPartReversedSeparatorsAdded = integerPartReversedSplitted.join(',');
      integerPartSeparatorsAdded = reverseString(integerPartReversedSeparatorsAdded);
    } else {
      integerPartSeparatorsAdded = '';
    }

    let leadingZeroCounter = 0;
    if (fractionalPart) {
      const fractionalPartSplitted = fractionalPart.split('');
      for (let i = 0; i < fractionalPartSplitted.length; i++) {
        const value1 = fractionalPartSplitted[i];
        if (value1 === '0') {
          leadingZeroCounter++;
        } else {
          break;
        }
      }
    }

    let decimalCount = leadingZeroCounter + 2;
    if (numberOfDecimals === 0 || numberOfDecimals) {
      decimalCount = leadingZeroCounter + numberOfDecimals;
    }

    const fractionPartFormatted = fractionalPart ? fractionalPart.slice(0, decimalCount) : '';

    return `${symbol || ''}${integerPartSeparatorsAdded}${fractionPartFormatted ? `.${fractionPartFormatted}` : ''}`;
  }

  static formatPercentage(value: any, precision: number = 2, roundValue?: boolean): string {
    const sanitizedValue = Number(value);

    if (sanitizedValue === undefined) {
      return '';
    }

    const sanitizedValuePer100 = sanitizedValue * 100;

    if (roundValue) {
      return `${sanitizedValuePer100.toFixed(precision)}%`;
    }

    const matchingString = '^-?\\d+(?:\\.\\d{0,' + precision + '})?';
    const regEx = new RegExp(matchingString);

    const sanitizedValueString = sanitizedValuePer100.toString();
    const parsedString = sanitizedValueString.match(regEx);
    return parsedString ? `${parsedString[0]}%` : '';
  }
}

export default NumberUtils;
