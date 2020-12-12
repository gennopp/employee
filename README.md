# employee

Run these in order

mongod --port 12345 (in seperate terminal)

In node terminal

1.) mongo zet_cc_abhishek < empJson.js

2.) npm i

3.) npm start

API EndPoints:

1.) To get the list of employees:- /api/employees (get)

2.) To add an employee:- /api/employees (post)

request:-
  {
    "name" :string,
    
    "dob": string,
    
    "salary": number,
    
    "skills": array,
    
    "img": string (base64)
    
  }
 response:-
 {
    "name" :string,
    
    "dob": string,
    
    "salary": number,
    
    "skills": array,
    
    "img": string (base64)"
 }

3.) To update an employee:- /api/employees/:employeeId (put)
request:-
request:-
  {
    "name" :string,
    
    "dob": string,
    
    "salary": number,
    
    "skills": array,
    
    "img": string (base64)
    
  }
 response:-
 {
    "name" :string,
    
    "dob": string,
    
    "salary": number,
    
    "skills": array,
    
    "img": string (base64)"
 }


4.) To delete an employee:- localhost:3000/api/employees/:employeeId (delete)

request:-
  {
    "name" :string,
    
    "dob": string,
    
    "salary": number,
    
    "skills": array,
    
    "img": string (base64)
  }
 response:-
 {
    "statusCode": 204
 }
