

# JavaScript

JavaScript est la couche comportementale des sites Web et est utilisé dans toutes les applications web actuelles. Pour écrire en camelCase, on utilise les règles de notation où chaque mot commence par une majuscule, à l'exception du premier mot.

Réaffecter consiste à donner une nouvelle valeur à une variable déjà déclarée. On peut utiliser les point-virgules partout, mais il est également possible de ne pas les mettre du tout. Il est préférable d'utiliser `let` et `const` plutôt que `var` pour déclarer des variables.

Pour accéder à la documentation, voici deux sites utiles :
- [Node.js API Documentation](https://nodejs.org/docs/latest-v18.x/api/)
- [Mozilla Developer Network - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Une fonction est un bloc de code qui peut être réutilisé plusieurs fois. Elle commence par le mot-clé `function` et renvoie un résultat à l'aide de `return`.

Le "rest operator" ou "spread operator" (les points de suspension `...`) permet de manipuler un nombre variable d'arguments dans les fonctions.

Concernant l'encodage des caractères, l'UTF-16 est utilisé, et il est recommandé de s'y référer pour plus d'informations.

# API REST

Une API REST est une interface qui permet une communication entre un ordinateur et un serveur dans le but de fournir des données. L'architecture REST est un ensemble de normes régissant cette communication, la rendant plus simple, flexible et rapide. Les API REST sont largement utilisées dans différents domaines tels que les services météo, la gestion d'utilisateurs, la gestion des tâches, etc.

Pour interroger une API, on utilise une URL associée à une requête HTTP, et les données sont généralement renvoyées au format JSON, le format le plus utilisé.

Une API REST est organisée autour de routes qui définissent les chemins d'accès aux différentes ressources ou fonctionnalités. Chaque route est associée à une méthode HTTP spécifiant l'action à effectuer sur la ressource.

La documentation d'une API comprend la définition des endpoints, indiquant les URLs spécifiques et les méthodes HTTP associées à chaque fonctionnalité de l'API.

Elle liste les paramètres existants pour chaque endpoint, précisant s'ils sont requis, facultatifs, leur type de données attendu, et leur rôle dans la requête.

La documentation fournit des exemples concrets de requêtes et de réponses pour chaque endpoint, aidant les développeurs à comprendre comment interagir avec l'API et interpréter les résultats obtenus.

# Routes et Endpoints dans une API REST

Les routes définissent les chemins d'accès aux différentes ressources ou fonctionnalités de l'API. Chaque route est associée à un endpoint spécifique, qui correspond à une URL spécifique et à une action HTTP particulière, telle que GET, POST, PUT, DELETE, etc. Par exemple, une route peut être `/articles`, avec l'endpoint `GET`, permettant de récupérer la liste de tous les articles. Une autre route pourrait être `/articles/:id`, avec l'endpoint `GET`, permettant de récupérer un article spécifique en fonction de son ID.

# Contrôleurs et leur rôle

Les contrôleurs agissent comme une interface entre les routes/endpoints de l'API et les opérations sur les données. Lorsqu'une requête arrive sur une route donnée, le contrôleur associé à cette route prend en charge le traitement de la requête. Il peut appeler des fonctions du modèle pour récupérer ou mettre à jour les données, puis renvoyer une réponse HTTP appropriée au client avec les résultats de l'action. Les contrôleurs sont essentiels pour gérer la logique métier de l'API et faciliter la séparation des préoccupations dans le développement de l'application.

# Structure MVC

La structure MVC est un modèle architectural couramment utilisé dans le développement web, y compris pour les API REST. Elle divise l'application en trois composants principaux : 

le modèle qui gère les données et la logique métier,
la vue qui affiche les données et le contrôleur qui fait le lien entre le modèle et la vue en traitant les requêtes et les opérations sur les données. Cette approche facilite la séparation des préoccupations et permet une maintenance et un développement plus simples.

