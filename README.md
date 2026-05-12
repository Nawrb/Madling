# Bienvenue sur le ReadMe du site web Madling

Madling est un site web développé en PHP, HTML et CSS, s'appuyant sur une base de données MySQL hébergée chez OVH. Pour démarrer directement le projet, rendez-vous dans la section [Démarrer le projet](#démarrer-le-projet).

## Fonctionnalités

Le site propose un lecteur de comics complet : navigation page par page au sein d'un chapitre, sélecteurs de chapitre et de page, et préchargement de l'image suivante pour fluidifier la lecture. Une page Archive recense l'intégralité des chapitres sous forme d'accordéons dépliables, avec des miniatures chargées en "lazy loading". Les pages Characters et Extra présentent respectivement les fiches des personnages et les contenus bonus ou fanarts soumis par la communauté.

Les visiteurs peuvent créer un compte et se connecter via e-mail/mot de passe ou via Google OAuth. Une fois connectés, ils peuvent poster des commentaires sur chaque page du comic et y répondre sous forme de fils de discussion. Un système de réinitialisation de mot de passe par token est également disponible.

## Détails techniques

Pour la gestion de projet, nous avons utilisé [Taiga](https://tree.taiga.io/project/nawrb-madling-comic/taskboard/madling-remake). L'outil a été reconfiguré pour l'épreuve car le sprint précédent avait été automatiquement supprimé, permettant ainsi de remettre en forme la liste des tâches. Le client nous a également fourni des maquettes pour nous orienter sur l'identité visuelle du site.

Le projet est développé en PHP 8 orienté objet, sans framework, en suivant un pattern Repository / Controller. La logique métier est séparée en classes dédiées : `AuthService` pour l'authentification, `SessionManager` pour la gestion des sessions, et trois repositories (`ChapitreRepository`, `PageRepository`, `CommentaireRepository`) pour l'accès aux données. Le `ComicController` orchestre la logique du lecteur et agrège les données avant de les transmettre à la vue.

La base de données MySQL est interrogée exclusivement via PDO avec des requêtes préparées, éliminant ainsi les risques d'injection SQL. Les mots de passe sont hachés avec `password_hash()` et vérifiés avec `password_verify()`. Chaque formulaire POST est protégé par un token CSRF généré et validé côté serveur. Les cookies de session sont configurés en `HttpOnly`, `SameSite: Lax`, et passent automatiquement en mode `Secure` lorsque le protocole HTTPS est détecté (compatible avec les reverse proxies comme OVH ou Cloudflare).

Le frontend est réalisé en HTML / CSS / JavaScript, sans framework. La navigation mobile est gérée par un menu burger. Les images téléchargées (pages, personnages, extras) sont stockées dans le dossier `assets/uploads/` et servies directement par le serveur web.

## Démarrer le projet

Le projet doit être lancé sur le poste ST 202 avec le nom d'utilisateur: "nrharbaoui" et mot de passe "demander un reset"

Une fois WampServer lancé, vous pourrez ouvrir Visual Studio Code. Le dossier `Epreuve_madling_site` devrait déjà être ouvert. Si ce n'est pas le cas, nous vous invitons à l'ouvrir manuellement via Visual Studio Code en suivant le chemin : `C:\wamp64\www\epreuve_madling_site`.

Vous pouvez maintenant cliquer sur l'onglet "Afficher les icônes cachées" en bas à droite de l'écran, cliquer sur l'icône WampServer, puis sur "Localhost" pour ouvrir le projet Madling.

**Note :** Si vous souhaitez accéder à la base de données, cliquez sur les icônes cachées en bas à droite de l'écran, sélectionnez WampServer, puis "Gestion bases de données" et enfin "phpMyAdmin". L'utilisateur est `root`, laissez le champ mot de passe vide et connectez-vous.
