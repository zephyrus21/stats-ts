import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf8',
  })
  .split('\n')
  .map((line: string): string[] => line.split(','));

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let MUW = 0;

for (const match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  )
    MUW++;
}

console.log(MUW);
