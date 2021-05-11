class BaseEmployee {

  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getMessage(): string {
    return `${this.name} with Id ${this.id}`;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }
}

class TemporaryEmployee extends BaseEmployee {
  private endDate: string;

  constructor(id: number, name: string, endDate: string) {
    super(id, name);
    this.endDate = endDate;
  }

  public getEndDate(): string {
    return this.endDate;
  }

  public getMessage(): string {
    return `${this.getName()} with id: ${this.getId()} and endDate ${this.endDate}`;
  }
}

class FullTimeEmployee extends BaseEmployee {
  private taxRate: number;

  constructor(id: number, name: string, taxRate: number) {
    super(id, name);
    this.taxRate = taxRate;
  }

  public getTaxRate(): number {
    return this.taxRate;
  }
  // Override
  // @override()
  public getMessage(): string {
    return `${this.getName()} with id: ${this.getId()} and taxRate ${this.taxRate}`;
  }
}

const printGetMessage = (employee: BaseEmployee): void => {
  console.log(employee.getMessage());
}

const ftEmployee = new FullTimeEmployee(1, 'Name', 5);
const tEmployee = new TemporaryEmployee(1, 'Name 2', 'July');

printGetMessage(ftEmployee);
printGetMessage(tEmployee);