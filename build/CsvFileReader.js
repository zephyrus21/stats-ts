"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: 'utf8',
        })
            //! split the file into lines
            .split('\n')
            //! map all the values separated by ,
            .map(function (line) { return line.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
