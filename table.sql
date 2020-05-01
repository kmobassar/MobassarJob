create table user (firstname varchar(29), lastname varchar(20),email varchar(20) primary key,
password varchar(20));
create table blog (email varchar(20),blog_text varchar(1000),primary key(email),foriegn key(email) 
refrences user(email));


