export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    console.log(this.parent)
    this.parent.append(templateElement.content)
  }
}