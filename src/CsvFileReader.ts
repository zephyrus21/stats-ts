/*
? Generic Method
import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read = (): void => {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf8',
      })
      //! split the file into lines
      .split('\n')
      //! map all the values separated by ,
      .map((line: string): string[] => line.split(','))
      //! to get all the value and convert them to suitable type
      .map(this.mapRow);
  };
}
*/

import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf8',
      })
      //! split the file into lines
      .split('\n')
      //! map all the values separated by ,
      .map((line: string): string[] => line.split(','));
  }
}
