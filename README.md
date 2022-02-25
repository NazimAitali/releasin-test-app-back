#Projet pour RELESIN

## Table of contents

- [Aperçu](#Aperçu)
  - [Démarrer](#Démarrer)
  - [liens](#liens)
  - [endpoint](#endpoint)
- [Démarche](Démarche)
  - [Built with](#built-with)
- [Auteur](#Auteur)

## Aperçu

### Démarrer

1. Téléchargez le dossier depuis le repo
2. Ouvrez le dossier dans cmd tapez la commande npm i
3. Créez un fichier ". env" dans le racine du dossier ouvrez le , copier dedans ces deux lignes avant de sauvegarder
   local = mongodb://localhost/RELEASIN-DB
   atlas = mongodb+srv://Nazim: 24052008 @clusters.wc3tm .mongodb.net/RELEASIN-DB
4. Dans le fichier "index.js" et à ligne 15, remplacez ATLAS par LOCAL si vous souhaitez utiliser une base de donnés local
5. Pour finir exécutez la commande npm star pour lancer l'API

NB : assurez-vous que NodeJs , NPM et mongoDBcompas sont bien installés sur votre machine.

### liens

Lien GitRepo : https://github.com/NazimAitali/releasin-test-app-front.git
Lien live : https://releasin-test-app.netlify.app/

### endpoint

- Get products : http://localhost:8080/api
- Post Product :
    1. attributeValue : http://localhost:8080/api/attributeValue
    2. attributes : http://localhost:8080/api/attributes/:id
    3. assignedattributes : http://localhost:8080/api/assigned/:id
    4. productType : http://localhost:8080/api/product/:id
    5. product : http://localhost:8080/api/product/:type/:att
-  Delete :
    1. attributeValue: http://localhost:8080/api/attributesValue/delete/:id
    2. attributes : http://localhost:8080/api/attributes/delete/:id
    3. assignedattributes: http://localhost:8080/api/assignedAttributes/delete/:id
    4. productType: http://localhost:8080/api/productType/delete/:id
    5. product: http://localhost:8080/api/product/delete/:id

## Démarche

### Built with

- [NodeJs](https://nodejs.org/en/)
- [ExpressJs](https://expressjs.com/fr/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDb](https://www.mongodb.com/)

## Auteur

- GitHub- https://github.com/NazimAitali
- Frontend Mentor - https://www.frontendmentor.io/profile/NazimAitali
- Twitter - https://twitter.com/NazimAitali
- !linkedIn - https://www.linkedin.com/in/nazimaitali
