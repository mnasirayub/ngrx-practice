export interface SingleEmployeeModel{
  id:string;
  userName:string;
  jobTitleName:string;
  employeeCode:string;
  techstack:[],
  emailAddress:string;
  image:string;
  dateOfJoining:string;
  status:string;
}

export interface EmployeesModel{
  employees:SingleEmployeeModel[];
  message:string;
  alertType:string;
}
