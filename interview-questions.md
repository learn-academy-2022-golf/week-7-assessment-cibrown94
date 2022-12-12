# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Well first, a foreign key, is like a primary key, but for a separate table. To fix this mistake go back and add the foreign key. 

Researched answer: For starters a foreign key is a column in a table database, with a unique calues corresponding with another table. To make changes to update, change names, or schema files we would need to do a migration file. So for example we would run rails generate migration AddColumnToTable (required information)

2. Which RESTful routes must always be passed params? Why?

Your answer: Get, Show, Delete, Update, Destroy

Researched answer: Passing params allows us as developers to add more info to our program by passing information into a route. Get, Show, Delete, Update all need to be passed param because these RESTful routes will target a specific, individual id. You would not used index, or create because those target the entire database. Index is the database as a whole. Create is making data to put into the index. 

3. Name three rails generator commands. What is created by each?

Your answer: There is rails generate migrate (actionneeded). Rails generate 

Researched answer: There are 3 rails generate command. Rails generate migrate, (this command will generate a migration file, which will allow the developer to make changes to the database. Like updating datas name, datas type, adding/removing a column.)
Than there is rails generate model, (this will create a migration file, and update schema file, with the model name. This model generate command will be where we initate the columns and data type. For example, rails generate model Ciani address:string phone_number:interger). Lastly, there is rails generate rspec: install command, doing this will ensure all of the rspec dependencies are installed on the computer. The order is rails generate rspec:install, rails generate model, and rails migrate. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The get route will display of all of students. 

action: "POST" location: /students
The post route will create a new student.

action: "GET" location: /students/new
The get and with the students/new will return an HTML form for creating a new student

action: "GET" location: /students/2
This will display a specific student

action: "GET" location: /students/2/edit
Get and edit will return an HTML form for editing a student

action: "PATCH" location: /students/2
Patch will update a specific student

action: "DELETE" location: /students/2
Delete will delete a specific student



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user I can see the Home Screen of a To-Do list website
As a user I can click the log in icon on the top right hand corner to login
As a user I can type in my user name and password
As a new user I typed in my username, and a password (that did not meet the requirements to create a login
As new user I made an password that fit the criteria for signing into the to-do list webpage
As a user I can see a plethora of to do list templates
As a user I click a random to do list template
As a user I put 3 of the 4 required fields
As a user I cannot continue because of 4 fields must be filled out
As a user I finished the field that was empty and I was able to add an item to my to do list 

