Madling
Bienvenue sur le dépôt du projet Madling. Il s'agit d'une plateforme web développée en PHP, HTML, CSS avec une base de données MySQL (hébergée sur OVH).

Pour lancer l'application immédiatement en environnement local, veuillez vous rendre directement à la section Démarrer le projet.

Fonctionnalités
Lecteur de comic interactif : Interface complète incluant une navigation page par page au sein d'un chapitre, des sélecteurs de chapitres et de pages, ainsi que le préchargement de l'image suivante pour garantir une lecture fluide.

Archives : Consultation de l'intégralité des chapitres sous forme d'accordéons dépliables. Les miniatures sont optimisées via un chargement différé (lazy loading).

Personnages et Extras : Pages dédiées aux fiches descriptives des personnages et aux contenus bonus (ex. fanarts soumis par la communauté).

Authentification et Comptes : Inscription et connexion par email/mot de passe classique ou via Google OAuth. Intégration d'un système de réinitialisation de mot de passe sécurisé par token.

Espace de discussion : Possibilité pour les utilisateurs connectés de publier des commentaires sur chaque page du comic et de répondre via un système de fils de discussion.

Détails Techniques
Architecture et Développement
Le projet est développé en PHP 8 orienté objet, sans recours à un framework externe, en respectant le design pattern Repository / Controller. La logique métier est rigoureusement segmentée :

Services : AuthService pour l'authentification et SessionManager pour le contrôle des sessions.

Repositories : Accès aux données géré par ChapitreRepository, PageRepository, et CommentaireRepository.

Controllers : Le ComicController centralise la logique du lecteur et prépare les données pour la vue.

Le front-end est conçu en HTML, CSS et JavaScript natifs. La navigation est pensée pour être responsive, incluant un menu burger pour les interfaces mobiles. Les fichiers médias téléchargés sont stockés dans le répertoire assets/uploads/ et directement servis par le serveur.

Sécurité et Base de Données
Base de données MySQL : Les requêtes sont exécutées exclusivement via PDO en utilisant des requêtes préparées, écartant ainsi les risques d'injections SQL.

Gestion des mots de passe : Hachage systématique des mots de passe avec password_hash() et vérification via password_verify().

Protection des formulaires : Génération et validation de tokens CSRF côté serveur pour toute requête POST.

Sécurité des sessions : Les cookies de session sont configurés avec les attributs HttpOnly et SameSite: Lax. Ils basculent automatiquement en mode Secure lorsqu'une connexion HTTPS est détectée (assurant la compatibilité avec des reverse proxies comme OVH ou Cloudflare).

Gestion de projet
Le suivi de projet a été réalisé sur Taiga (le sprint a été recréé spécifiquement pour l'épreuve). Le développement visuel s'est appuyé sur des maquettes fournies par le client pour définir l'orientation stylistique du site.

Démarrer le projet
Cet environnement a été spécifiquement préparé pour l'évaluation. Un compte utilisateur "professeur" a déjà été créé.

Initialisation du serveur : Lancez l'application WampServer sur votre machine (renseignez votre mot de passe système si une autorisation est demandée) pour démarrer les services web et la base de données.

Ouverture du code source : Ouvrez Visual Studio Code. Le dossier du projet devrait s'ouvrir par défaut. Dans le cas contraire, veuillez ouvrir le dossier situé au chemin suivant : C:\wamp64\www\epreuve_madling_site.

Accès au site : Dans la zone de notification de votre barre des tâches (en bas à droite), cliquez sur l'icône WampServer, sélectionnez Localhost, puis cliquez sur le projet madling pour l'afficher dans votre navigateur.

Note concernant la base de données :
Si vous souhaitez inspecter la base de données, cliquez sur l'icône WampServer dans la zone de notification, puis allez dans phpMyAdmin. Utilisez l'identifiant root, laissez le champ du mot de passe vide, et connectez-vous.
