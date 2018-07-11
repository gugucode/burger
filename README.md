# burger
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

### How to install:

* Install Node.js and npm in your laptop.
* In your terminal, run "git clone https://github.com/gugucode/burger.git" to download application.
* Or Download from https://github.com/gugucode/burger manually.
* After download, in your terminal, run "npm install" inside the burger folder that has package.json to install dependend packages.
* Install mySql 8.0 and start the mySql server. Run "mysql -u user_name -p < schema.sql" and "mysql -u user_name -p < seed.sql" in burger/db folder on terminal to create "burgers_db" database and "burgers" table. Also, it will insert some dummy data into database for your test.
* Modify host, port, user, and password in config/connection.js if they are different from yours. This file contains your database's access info.

### How to use Eat-Da-Burger!

* Put a name of burger in the textbox, then hit submit.
* Then the burger will be print left side on the web page, plus a "devoured" button.
* If you hit the "devoured" button, it will move the burger to the right side.


### Built With  

* HTML, CSS, and Javascript 
* Node.js: mysql, express, Handlebars
* MySql database server


### Contributing

Please contact Erin at meiyuechang@gmail.com for details on our code of conduct, and the process for submitting pull requests to us.

### Authors

* **Erin Mei** - *Initial work* - [Portfolio](https://gugucode.github.io/mysite/)

