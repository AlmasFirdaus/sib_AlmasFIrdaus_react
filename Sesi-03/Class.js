export class Person {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }
}

export class EmployeeClass extends Person {
  doWork() {
    return "complete!";
  }
}
