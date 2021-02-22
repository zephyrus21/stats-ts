import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchValues';

const reader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(reader);
matchReader.load();
