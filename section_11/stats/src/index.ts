import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map((ele: string): string[] => ele.split(','));

let manUnitedWins = 0;

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of matches) {
  if ((match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)) {
    manUnitedWins++
      }
}

console.log(manUnitedWins)