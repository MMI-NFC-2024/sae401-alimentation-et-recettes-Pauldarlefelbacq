# Liens
Paul Darle-Felbacq
### URL du site : https://spoonful-sae-414.pauldarlef.fr/
### URL backoffice : https://spoonful-sae-414.pauldarlef.fr/_/

# Fonctionalités
 - Liste des recettes [/recettes](https://spoonful-sae-414.pauldarlef.fr/recettes)
    - Recherche
    - filtres
    - Barre de satisfaction de la recette dynamique (voir le fichier [Progress_bar.astro](/src/components/Progress_bar.astro))
    - Ajout aux favoris en un click (sur le petit coeur)

- Liste des coachs [/coachs](https://spoonful-sae-414.pauldarlef.fr/coachs)
    - Recherche
    - Barre de satisfaction du coach dynamique

- Vue en détail des coachs
    - Affichage des infos diverses
    - Affichage de leurs commentaires
    - Champ pour poster un commentaire (inutilisable par un autre ou un utilisateur qui a déjà commenté)

 - Liste des ingrédients [/ingredients](https://spoonful-sae-414.pauldarlef.fr/ingredients)
    - Recherche

 - Vue en détail des ingrédients
    - Valeurs nutritionnelles de l'ingrédient
    - Recettes contenant cet ingrédient

 - Connexion & inscription [/authpassword](https://spoonful-sae-414.pauldarlef.fr/authpassword)
    - Formulaires gérés dynamiquement sur la même page
    - Déconnexion sur la page auth pour rebond

 - Page de profil [/profil](https://spoonful-sae-414.pauldarlef.fr/profil) (nécéssaire d'être connecté)
    - Les infos de l'utilisateur
    - Formulaire caché pour modifier le profil (change si l'utilisateur est un coach)
    - Posts favoris (cliquer sur le bouton vos favoris)
    - Les recettes créées par l'utilisateur (possible de les éditer ou de les supprimer)
    - Une recette aléatoire qui fait partie du régime de l'utilisateur
    - Un bouton de déconnexion

 - Ajout de recettes [/recettes/add](https://spoonful-sae-414.pauldarlef.fr/recettes/add)
    - Ajout en plusieurs étapes

 - Modification des recettes [/recettes/edit](https://spoonful-sae-414.pauldarlef.fr/recettes/edit/9dgccd1n2g9vutr) (accessible via le profil bouton "Vos recettes")

  - Vue en détail des recettes [/recettes/h8gtkhscv29bakv](https://spoonful-sae-414.pauldarlef.fr/recettes/h8gtkhscv29bakv)
    - Ajout de commentaires (1 seul par utilisateur et par recette)
    - calcul des apport nutritionnels & quantité ingrédients en fonction du nombre de personnes voulues

 - Script de déploiement basique [deploy.yaml](./.github/workflows/deploy.yaml)

# IA

 - utilisé sur les filtres des recettes (pour les combiner avec les params de la recherche)4
 - Aussi utilisé pour le footer (mise en forme surtout)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ymdhk8vP)