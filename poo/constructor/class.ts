class Employee {
  private name: string;
  private id: number;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

}

const employee = new Employee(1, 'Name');

console.log(employee.getId());
console.log(employee.getName());