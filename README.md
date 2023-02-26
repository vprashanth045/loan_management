# mean-loan-management

Step #1 - create separate folder for frontend and backend

# Frontend
Step #2 - Installing Angular CLI in the frontend
    npm i @angular/cli

Step #3 - create a new Angular app
    ng new loan-mgmt

Step #4 - verify if app is up and running 
    ng serve

Step #5 - install the Bootstrap Framework and Jquery
    npm i bootstrap --save
    npm i jquery --save

Step #6 - install packages 
    npm i 

Step #7 - verify frontend app is running 
    npm run start

# Frontend
Step #8 - create UI
    1) create header - `ng g c header`
    2) create sidebar 
    3) create home and footer
    4) add css properties
    5) lazy loading module
        setup routes for different sections
        i) ng g module customers --route customer --module app.module
# Backend
Step #9 
    1) Generate express layout
        `npx express-generator`
    2) create MongoDB database
    3) create Collections
    4) create Schemas
    5) create Models
          i) User
         ii) loans
        iii) Payments
         iv) Invoices
          v) Customers
         vi) settings
        vii) AuditLogs

# Frontend
Enable active routing