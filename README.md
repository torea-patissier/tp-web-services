# API WEB SERVICES

Ce projet est une application backend construite avec NodeJS, ExpressJS, et une base de données MySQL.

## Prérequis

- Node.js
- MySQL (installé localement)
- npm (Gestionnaire de paquets Node)

## Installation

1. Clonez le dépôt : 

`git clone git@github.com:torea-patissier/tp-web-services.git`

2. Installez les dépendances : `npm install`

3. Configurez votre base de données MySQL en local. Créez une base de données et exécutez le script SQL fourni pour initialiser les tables (database.sql) .

4. Créez un fichier `.env` à la racine du projet et configurez vos variables d'environnement

`PORT=`


`HOST=`


`LOGIN=`


`PASSWORD=`

`DATABASE_PORT=`

`DATABASE=`

## Démarrage

Pour démarrer l'application, exécutez : `npm run dev`


L'application se lancera sur `http://localhost:[PORT]`

## Fonctionnalités

- **API RESTful :** Implémente les routes CRUD pour chaque modèle.
- **Gestion des erreurs :** Inclut la gestion des erreurs comme les objets non trouvés, les erreurs serveur, et les contraintes SQL.

## Documentation API

La documentation de l'API est disponible sur Postman. Veuillez consulter le lien Postman suivant pour une vue détaillée des endpoints et des exemples de requêtes :

[Documentation de l'API sur POSTMAN ICI](https://documenter.getpostman.com/view/18685609/2s9YkjCjZH#2faa651d-f35f-477b-a9c0-9ab879b8caa4
)
