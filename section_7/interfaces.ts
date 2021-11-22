interface Reportable {
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

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}g of sugar.`;
  }
}

const printItemSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printItemSummary(drink)