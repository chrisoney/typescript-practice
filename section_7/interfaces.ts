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

const printVehicle = (vehicle: Reportable): void => {
  console.log(vehicle.summary())
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken ? 'yes' : 'no'}`);
}

printVehicle(oldCivic)