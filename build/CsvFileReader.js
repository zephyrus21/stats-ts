"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var Utils_1 = require("./Utils");
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
            .map(function (line) { return line.split(','); })
            //! to get all the value and convert them to suitable type
            .map(function (row) { return [
            Utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
