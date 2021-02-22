import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report/ConsoleReport';
import { HtmlReport } from './report/HtmlReport';

//! here we read the csv file
const reader = new CsvFileReader('football.csv');

//! here we read the the file that have content as football matches
const matchReader = new MatchReader(reader);
//! here we load the content
matchReader.load();

//!here we pass the team name and type of report to be analyzed
const summary = new Summary(new WinAnalysis('Man United'), new ConsoleReport());
const summaryHtml = new Summary(
  new WinAnalysis('Man United'),
  new HtmlReport()
);

//! this will build the analysis and report at once
summary.buildAndReport(matchReader.matches);
summaryHtml.buildAndReport(matchReader.matches);
