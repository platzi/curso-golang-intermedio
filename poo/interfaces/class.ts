interface PrintInfo {
  getMessage(): string
}

class ExampleClass implements PrintInfo {
  public getMessage(): string {
    return `Hello World!`
  }
}

class ExampleClass2 implements PrintInfo {
  public getMessage(): string {
    return `Hello World 2!`
  }
}

const printMessage = (pi: PrintInfo) => {
  console.log(pi.getMessage());
}

const e = new ExampleClass();
const e2 = new ExampleClass2();

printMessage(e);
printMessage(e2);