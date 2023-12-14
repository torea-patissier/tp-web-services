CREATE TABLE personne (
                          id    	integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          nom   	VARCHAR( 20 ) NOT NULL ,
                          prenom	VARCHAR( 40 )
);

CREATE TABLE utilisateur (
                             id        int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                             email     VARCHAR(200) NOT NULL,
                             password  VARCHAR(255) NOT NULL,
                             personne_id int,
                             FOREIGN KEY (personne_id) REFERENCES personne(id)
);

INSERT INTO personne (nom, prenom)
VALUES ('Monkey D', 'Luffy'), ('Hancock', 'Boa'), ('Mihawk', 'Dracule'), ('Figarland', 'Shanks');