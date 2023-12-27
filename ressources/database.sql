-- Création de la base de données
CREATE DATABASE IF NOT EXISTS mabibliothèque;
USE mabibliothèque;

-- Création de la table auteur
CREATE TABLE auteur (
                        id        INTEGER NOT NULL AUTO_INCREMENT,
                        nom       VARCHAR(20) NOT NULL,
                        prenom    VARCHAR(20),
                        telephone VARCHAR(10) NOT NULL,
                        email     VARCHAR(60),
                        PRIMARY KEY (id)
);

-- Création de la table couverture
CREATE TABLE couverture (
                            id          INTEGER NOT NULL AUTO_INCREMENT,
                            nom         VARCHAR(50) NOT NULL,
                            description TEXT NOT NULL,
                            PRIMARY KEY (id)
);

-- Création de la table genre
CREATE TABLE genre (
                       id  INTEGER NOT NULL AUTO_INCREMENT,
                       nom VARCHAR(50) NOT NULL,
                       PRIMARY KEY (id)
);

-- Création de la table livre
CREATE TABLE livre (
                       id            INTEGER NOT NULL AUTO_INCREMENT,
                       titre         VARCHAR(50) NOT NULL,
                       nb_pages      INT NOT NULL,
                       categorie     VARCHAR(20),
                       id_auteur     INT,
                       id_couverture INT,
                       PRIMARY KEY (id),
                       CONSTRAINT fk_id_auteur
                           FOREIGN KEY (id_auteur)
                               REFERENCES auteur(id)
                               ON DELETE SET NULL,
                       CONSTRAINT fk_id_couverture
                           FOREIGN KEY (id_couverture)
                               REFERENCES couverture(id)
);

-- Création de la table livre_genre
CREATE TABLE livre_genre (
                             id_livre INT,
                             id_genre INT,
                             CONSTRAINT fk_id_livre
                                 FOREIGN KEY (id_livre)
                                     REFERENCES livre(id),
                             CONSTRAINT fk_id_genre
                                 FOREIGN KEY (id_genre)
                                     REFERENCES genre(id)
);

-- Création de la table utilisateur
CREATE TABLE utilisateur (
                             id       INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
                             email    VARCHAR(200) NOT NULL,
                             password VARCHAR(255) NOT NULL
);

-- Insertion des données dans auteur
INSERT INTO auteur (prenom, nom, telephone, email) VALUES
                                                       ('Bruce', 'Eckel', '0605040302', 'thinking@me.net'),
                                                       ('Antonio', 'Goncalves', '0102030405', NULL),
                                                       ('Petter', 'Haggar', '0655443322', 'petharg@hotmail.com'),
                                                       ('Claude', 'Delannoy', '0677889900', 'claude@delanooy.com');

-- Insertion des données dans couverture
INSERT INTO couverture (nom, description) VALUES
                                              ('Couverture 1', '...'),
                                              ('Couverture 2', '...'),
                                              ('Couverture 3', '...'),
                                              ('Couverture 4', '...'),
                                              ('Couverture 5', '...'),
                                              ('Couverture 6', '...'),
                                              ('Couverture 7', '...'),
                                              ('Couverture 8', '...');

-- Insertion des données dans genre
INSERT INTO genre (nom) VALUES
                            ('SCIENCE-FICTION'),
                            ('FANTASTIQUE'),
                            ('APPRENTISSAGE'),
                            ('JAVA'),
                            ('C');

-- Insertion des données dans livre
INSERT INTO livre (titre, nb_pages, categorie, id_auteur, id_couverture) VALUES
                                                                             ('Thinking in Java', 320, 'java', 1, 1),
                                                                             ('Thinking in C++', 640, 'cpp', 1, 2),
                                                                             ('Les cahiers du programmeur Java EE', 240, 'java', 2, 3),
                                                                             ('Beginning Java EE 7', 120, 'javaee', 2, 4),
                                                                             ('Mieux programmer en Java', 540, 'java', 3, 5),
                                                                             ('Exercices en Java', 184, 'java', 4, 6),
                                                                             ('Initiation à la programmation', 350, 'algo', 4, 7),
                                                                             ('C++ Guide complet', 842, 'cpp', 4, 8);

-- Insertion des données dans livre_genre
INSERT INTO livre_genre (id_livre, id_genre) VALUES
                                                 (1, 3),
                                                 (1, 4),
                                                 (2, 3),
                                                 (2, 5),
                                                 (3, 3),
                                                 (3, 4),
                                                 (4, 3),
                                                 (4, 4),
                                                 (5, 3),
                                                 (5, 4),
                                                 (6, 3),
                                                 (6, 4),
                                                 (7, 3),
                                                 (7, 4);
