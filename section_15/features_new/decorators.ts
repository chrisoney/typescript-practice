class Boat {
  color: string;

  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }

  pilot(): void {
    console.log('Swish');
  }
}