# Madling — Lecteur de Comics en ligne

> Site web de lecture de comics développé en PHP 8 orienté objet, sans framework, avec authentification, commentaires et gestion de contenu. Hébergé chez OVH sur base de données MySQL.

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Architecture technique](#architecture-technique)
- [Sécurité](#sécurité)
- [Gestion de projet](#gestion-de-projet)
- [Démarrer le projet](#démarrer-le-projet)

---

## Fonctionnalités

**Lecteur de comics**
- Navigation page par page au sein d'un chapitre
- Sélecteurs de chapitre et de page
- Préchargement de l'image suivante pour fluidifier la lecture

**Pages du site**
- **Archive** : liste complète des chapitres en accordéons dépliables, miniatures en lazy loading
- **Characters** : fiches descriptives des personnages
- **Extra** : contenus bonus et fanarts soumis par la communauté

**Comptes utilisateurs**
- Inscription et connexion par e-mail / mot de passe ou via Google OAuth
- Réinitialisation de mot de passe par token
- Commentaires par page avec fils de discussion imbriqués

---

## Architecture technique

| Composant | Détail |
|-----------|--------|
| **Langage** | PHP 8 orienté objet, sans framework |
| **Pattern** | Repository / Controller |
| **Base de données** | MySQL via PDO (requêtes préparées) |
| **Frontend** | HTML / CSS / JavaScript natif |
| **Hébergement** | OVH |

**Structure des classes principales :**

```
AuthService              — Gestion de l'authentification
SessionManager           — Gestion des sessions utilisateur
ChapitreRepository       — Accès aux données des chapitres
PageRepository           — Accès aux données des pages
CommentaireRepository    — Accès aux données des commentaires
ComicController          — Orchestration du lecteur, agrégation vers la vue
```

Les images uploadées (pages, personnages, extras) sont stockées dans `assets/uploads/` et servies directement par le serveur web. La navigation mobile est assurée par un menu burger.

---

## Sécurité

- Requêtes PDO préparées — aucun risque d'injection SQL
- Mots de passe hachés avec `password_hash()`, vérifiés avec `password_verify()`
- Token CSRF généré et validé côté serveur sur chaque formulaire POST
- Cookies de session en `HttpOnly`, `SameSite: Lax`, passage automatique en `Secure` si HTTPS détecté (compatible reverse proxies OVH / Cloudflare)

---

## Gestion de projet

Le projet a été suivi via [Taiga](https://tree.taiga.io/project/nawrb-madling-comic/taskboard/madling-remake). L'outil a été reconfiguré pour l'épreuve (le sprint précédent avait été automatiquement supprimé). Des maquettes fournies par le client ont guidé l'identité visuelle du site.

---

## Démarrer le projet

> Le projet doit être lancé sur le poste **ST 202**.
>
> Identifiants de session : utilisateur `nrharbaoui` — mot de passe : demander un reset.

**1. Lancer WampServer**

Démarrer WampServer sur le poste. Une fois actif, ouvrir Visual Studio Code.

**2. Ouvrir le dossier projet**

Le dossier `Epreuve_madling_site` devrait déjà être ouvert dans VS Code. Sinon, l'ouvrir manuellement via :

```
C:\wamp64\www\epreuve_madling_site
```

**3. Accéder au site**

Cliquer sur "Afficher les icônes cachées" en bas à droite de la barre des tâches → icône WampServer → **Localhost**.

**4. Accéder à la base de données (optionnel)**

Icônes cachées → WampServer → Gestion bases de données → **phpMyAdmin**

```
Utilisateur : root
Mot de passe : usersio
```
