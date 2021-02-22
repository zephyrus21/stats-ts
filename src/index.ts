import { WinAnalysis } from './analyzers/WinAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './report/consoleReport';
import { Summary } from './Summary';

const reader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

summary.buildAndReport(matchReader.matches);
