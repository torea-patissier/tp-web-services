CREATE TABLE personne (
                          id    	integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          nom   	VARCHAR( 20 ) NOT NULL ,
                          prenom	VARCHAR( 40 )
);

INSERT INTO personne (nom, prenom)
VALUES ('Monkey D', 'Luffy'), ('Hancock', 'Boa'), ('Mihawk', 'Dracule'), ('Figarland', 'Shanks');