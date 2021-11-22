interface Reportable {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printItemSummary = (item: Reportable): void => {
  console.log(item.summary())
  console.log(`Year: ${item.year}`);
  console.log(`Broken? ${item.broken ? 'yes' : 'no'}`);
}

printItemSummary(oldCivic)