

javaScript ?

C'est la couche comportemental des sitesWeb
Toutes les applications web actuels

Ecrire camelCase

réafecté c'est donnée une vouvelle valeurs avec une variable d'assignation
Si on met les ; soit on les mets partout soit pas
Toujours utilisé let et const plutôt que var

aller sur les deux sites suivants pour la doc :
- https://nodejs.org/docs/latest-v18.x/api/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

Fonction bloc de code qui và etre amener à etre utilisé plusieurs fois

ça commence par un mot clefs function et on renvoie le résultat avec un return 

... : reste operator ou spred operator

Utf-16 aller voir

Qu'est ce qu'une API REST

Une interface qui permet d'obtenir une communication entre l'ordinateur et un serveur dans le but de fournir des données

L’architecture REST : Representational State Transfer
Une API est dite “Restful” lorsqu’elle respecte l’architecture REST, c’est-à-dire un ensemble de normes qui régissent la manière dont communique une application avec son environnement, que ce soit un outil tiers ou un autre composant de l'application.


Une API Restful répond à des commandes et à des langages spécifiques. Elle est donc plus simple, plus flexible et plus rapide que les autres types d’APIs. Par conséquent, elle est adaptée à un usage industriel en entreprise. C’est pourquoi les APIs REST sont de loin les plus utilisées.

Intéroger avec l'url de l'API
les données sonr renvoyé en Json format le plus utilisé

L'API REST est l'interface entre nous et le serveur, dans le but de récupérer les données
Pour utilisé l'API on utilise une URL couplé avec une requète HTTP

L'API REST est utilisé par exemple sous différentes façons :
- Service météo 
- Gestion d'utilisateurs
- Gestion des tâches
etc

En général, la documentation d’une API comporte :

La définition des endpoints ;
Les paramètres existants ;
Des exemples de codes, de requêtes et de réponses.

Comment ça marche :
Les routes dans une API REST définissent les chemins d'accès aux différentes ressources ou fonctionnalités de l'API. Elles indiquent comment l'API doit réagir lorsque des requêtes sont effectuées à des URL spécifiques. Les routes sont associées à des méthodes HTTP telles que GET, POST, PUT, DELETE, etc., pour spécifier l'action à effectuer sur une ressource donnée.

Par exemple, une API REST pour un blog peut avoir les routes suivantes :
- `GET /articles` : Récupère la liste de tous les articles.
- `GET /articles/:id` : Récupère un article spécifique en fonction de son ID.
- `POST /articles` : Crée un nouvel article.
- `PUT /articles/:id` : Met à jour un article spécifique en fonction de son ID.
- `DELETE /articles/:id` : Supprime un article spécifique en fonction de son ID.

Endpoints :
Les endpoints, également appelés points d'extrémité, correspondent à l'URL complet associé à une route spécifique. Ils spécifient l'emplacement précis où une requête doit être envoyée pour accéder à une ressource ou effectuer une action particulière. Chaque endpoint est une combinaison de l'adresse de base de l'API et de la route.

Par exemple, pour l'API de blog mentionnée précédemment, les endpoints seraient :
- `GET http://api.example.com/articles`
- `GET http://api.example.com/articles/123`
- `POST http://api.example.com/articles`
- `PUT http://api.example.com/articles/123`
- `DELETE http://api.example.com/articles/123`

Structure MVC  :
MVC est un modèle architectural couramment utilisé dans le développement web, y compris les API REST. Il divise l'application en trois composants principaux :

- Modèle : Le modèle représente les données et la logique métier de l'application. C'est ici que les opérations sur les données sont effectuées, comme la récupération ou la mise à jour de la base de données. Le modèle gère également la validation des données et l'interaction avec la base de données.

- Vue : La vue est responsable de l'affichage des données à l'utilisateur final. Dans le cas d'une API REST, la vue ne représente généralement pas l'interface utilisateur réelle, car les API REST retournent généralement des données au format JSON, XML ou autre format de données, plutôt que du HTML pour l'affichage.

- Contrôleur : Le contrôleur agit comme une interface entre le modèle et la vue. Il reçoit les requêtes HTTP des endpoints, traite les données reçues et effectue les opérations appropriées sur le modèle. Une fois que le modèle a été mis à jour, le contrôleur renvoie généralement une réponse appropriée au client, comme un statut de réussite ou un message d'erreur.

La structure MVC facilite la séparation des préoccupations et rend l'application plus modulaire, ce qui permet une maintenance et un développement plus simples.

# NOTE-EXERCICES
