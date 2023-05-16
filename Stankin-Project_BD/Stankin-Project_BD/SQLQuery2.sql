CREATE DATABASE STANKIN_BD
COLLATE Cyrillic_General_CI_AS
GO

create table register_st(
id_user int identity(1,1) not null,
login_user varchar(50) not null,
password_user varchar(50) not null,
);


 insert into register_st(login_user, password_user) values('admin', 'admin')
 
 select * from register_st