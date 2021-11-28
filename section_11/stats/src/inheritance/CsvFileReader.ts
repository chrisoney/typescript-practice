import fs from 'fs';
import { MatchResult } from "./MatchResult";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) { }
  abstract mapRow(row: string[]): T;
  
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map((ele: string): string[] => ele.split(','))
      .map(this.mapRow)
  }
}