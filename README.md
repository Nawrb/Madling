## Bienvenu sur le ReadMe du site web Madling

Madling est un site web développé en PHP, HTML, CSS avec une base de donnée MySQL qui est hébergée sur OVH. Pour directemment démarrer le projet, rendez-vous dans la séction démarrer.

## Fonctionnalités

Le site propose un lecteur de comic complet : navigation page par page au sein d'un chapitre, sélecteurs de chapitre et de page, et préchargement de l'image suivante pour fluidifier la lecture. Une page Archive recense l'intégralité des chapitres sous forme d'accordéons dépliables, avec des miniatures chargées en lazy loading. Les pages Characters et Extra présentent respectivement les fiches personnages et les contenus bonus ou fanarts soumis par la communauté.
Les visiteurs peuvent créer un compte et se connecter via email/mot de passe ou via Google OAuth. Une fois connectés, ils peuvent poster des commentaires sur chaque page du comic et y répondre en fils de discussion. Un système de réinitialisation de mot de passe par token est également disponible.

## Détail technique

Tout d'abord, pour la gestion de projet nous avons utilisé un trello pour la gestion du projet, pour remettre en forme la liste des tâches à faire. Le client nous à aussi fourni des maquettes qu'il a pu faire pour nous orienter dans le style que devait avoir le site.

Le projet est développé en PHP 8 orienté objet, sans framework, en suivant un pattern Repository / Controller. La logique métier est séparée en classes dédiées : AuthService pour l'authentification, SessionManager pour la gestion des sessions, et trois repositories (ChapitreRepository, PageRepository, CommentaireRepository) pour l'accès aux données. Le ComicController orchestre la logique du lecteur et agrège les données avant de les passer à la vue.

La base de données est MySQL, interrogée exclusivement via PDO avec requêtes préparées, ce qui élimine les risques d'injection SQL. Les mots de passe sont hashés avec password_hash() et vérifiés avec password_verify(). Chaque formulaire POST est protégé par un token CSRF généré et validé côté serveur. Les cookies de session sont configurés en HttpOnly, SameSite: Lax, et passent automatiquement en mode Secure lorsque HTTPS est détecté — compatible avec les reverse proxies (OVH, Cloudflare).

Le frontend est en HTML / CSS / JavaScript, sans framework. La navigation mobile est gérée par un menu burger. Les images uploadées (pages, personnages, extras) sont stockées dans assets/uploads/ et servies directement par le serveur web.

## Démarrer le projet 

Comme vous avez pu le voir, un utilisateur professeur a été crée, suite à la connexion vous pouvez directement ouvrir Wamp Server (il faudra renseigner votre mot de passe) pour ouvrir la base de donnée puis accéder au projet en localhost.

Suite à l'ouverture de Wamp Server, vous pourrez ouvrir Visual Studio code. Normalement le dossier Epreuve_madling_site est déjà ouvert, cependant, si il ne l'est pas je vous invite à l'ouvrir depuis Visual Studio Code avec le chemin suivant: C:\wamp64\www\epreuve_madling_site

Vous pouvez maintenant cliquer sur l'onglet ouvrir les icônes cachées en bas a droite de l'écran, cliquer sur Wamp Server, localhost et ouvrir le projet madling.

note: si vous voulez accéder à la BD, il faudra cliquer sur les icônes cachées en bas a droite de l'écran, cliquer sur Wamp Server, Gestion bases de données et enfin phpmyadmin. l'utilisateur est root, laisser le mot de passe vide et connecter vous. 
