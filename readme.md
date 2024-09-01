# INSTALLATION
First you need to create a mysql database with the name you like.
Import the table mocks in the db via the .sql file "db_import.sql"

# USE
Insert into the table
id = is auto increment
rout = is the path that is required, it must include the /
status = what status should the page return

If the route is not found in the db it will return a 404 status (not found)


# LEGAL
I do not garantee the full functionality of the software