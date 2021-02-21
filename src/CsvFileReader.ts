import fs from 'fs';
import { dateStringToDate } from './Utils';
import { MatchResult } from './MatchResult';

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
      .map((line: string): string[] => line.split(','))
      //! to get all the value and convert them to suitable type
      .map((row: string[]): any => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]);
  }
}
