class Department {
  employees: string[] = [];
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInformation() {
    console.log(this.employees, this.employees.length);
  }
}
const department = new Department();
department.addEmployee("max");
department.addEmployee("mido");
// we can push employee with out addEmployees func
department.employees.push("ahmed");

console.log(department.printEmployeesInformation());
// output ['max','mido','ahmed']

// so we need access modifiers

console.log("*", "same example with access modifiers(private)", "*");

class DepartmentTest {
  // private make u cant access this prop or too method
  //outside our class
  //note the default is  public
  private employees: string[] = [];
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInformation() {
    console.log(this.employees, this.employees.length);
  }
}
const departmentTest = new DepartmentTest();
departmentTest.addEmployee("max");
departmentTest.addEmployee("mido");
// we cant push employee with out addEmployees func
departmentTest.employees.push("ahmed"); //run time error we cant access it out our class

console.log(departmentTest.printEmployeesInformation());
