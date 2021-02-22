/*
? Original
import fs from 'fs';
import { dateStringToDate } from './Utils';
import { MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

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
      .map(
        (row: string[]): MatchData => [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      );
  }
}
*/

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
