# My Todo List
My ToDo List is a simple application built with React/Redux library and it uses [Cloud Firestore](https://firebase.google.com/products/firestore) (by Google) as backend database.  
Authenticated users can create, edit, delete tasks and toggle their status (active/completed).  
### Local deployment
In order to deploy My ToDo List app locally, install Node JS ([Installing Node.js](https://nodejs.org/en/download/package-manager/)) and navigate in the terminal (command line) to the folder, where you want this app to be stored.  
```bash
cd path/to/the/folder
```
And clone the app from repository:
```bash
git clone https://github.com/melnikov-anton/mytodolist.git
```
Navigate into apps folder:
```bash
cd mytodolist
```
Inside **mytodolist** folder run:
```bash
npm install
```
After installing Node modules rename inside **mytodolist** folder file **.env.example** to **.env**:
```bash
mv .env.example .env
```
and fill in API Key, Auth Domain and Project ID data for your Firebase project ([See docs](https://firebase.google.com/docs/web/setup)).  
To start the application run inside **mytodolist** folder:
```bash
npm start
```
Open browser and navigate to [http://localhost:3000](http://localhost:3000) .  
  
To create production build run:
```bash
npm run build
```
