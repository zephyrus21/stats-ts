import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report/ConsoleReport';
import { HtmlReport } from './report/HtmlReport';

const reader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());

const summaryHtml = new Summary(
  new WinAnalysis('Man United'),
  new HtmlReport()
);

summary.buildAndReport(matchReader.matches);
summaryHtml.buildAndReport(matchReader.matches);
