drop database hca;
create database hca;
use hca;

create table LEAGUES (
    NAME    varchar(100) NOT NULL,
    ID integer(10) NOT NULL AUTO_INCREMENT,
    DESCRIPTION varchar(255) NOT NULL),
    PRIMARY KEY (ID)

INSERT INTO LEAGUES (NAME,ID, DESCRIPTION) VALUES ("4 Piece Acts", 1, "This division features bands with a maximum of four members i.e. Vocalist, Lead Guitarist, Bassist, and Drummer.")
INSERT INTO LEAGUES (NAME,ID, DESCRIPTION) VALUES ("6 Piece Acts", 2, "This division features bands with a maximum of six members i.e. Vocalist, Lead Guitarist, Rhythm Guitarist, Bassist, Keyboardist, and Drummer.")
INSERT INTO LEAGUES (NAME,ID, DESCRIPTION) VALUES("Femme Fatales", 3, "This division features all female bands with a maximum of six members.")
INSERT INTO LEAGUES (NAME,ID, DESCRIPTION) VALUES("Classic Rockers", 4, "This division features bands with members over 50 with a maximum of six members.")
INSERT INTO LEAGUES (NAME,ID, DESCRIPTION) VALUES("Young Bucks", 5, "This division features bands with members under 30 with a maximum of six members.")

#SELECT * FROM LEAGUES;
#SELECT * FROM LEAGUES WHERE ID = 1;
#SELECT * FROM LEAGUES WHERE NAME = "Classic Rockers";
#UPDATE LEAGUES SET DESCRIPTION = "This division features bands with members under 31 with a maximum of six members." WHERE ID = 5 AND NAME = "Young Bucks"
#DELETE FROM LEAGUES WHERE ID = 5 AND NAME = "Young Bucks"