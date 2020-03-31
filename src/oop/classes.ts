abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log(`ITDepartment (${this.id}): ${this.name}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No new report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('Please specify a value');
    this.addReport(value);
  }

  // private constructor can be instanciated inside class, ref. Singleton pattern
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`AccountingDepartment (${this.id}): ${this.name}`);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
}

// call static method
const employee1 = Department.createEmployee('Anna');

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Anna');

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = AccountingDepartment.getInstance();

accounting.addEmployee('Manu');
accounting.printEmployeeInformation();

accounting.addReport('Something went wrong...');
accounting.getReports();

console.log(accounting.mostRecentReport);
