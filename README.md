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
 - Liste des ingrédients [/ingredients](https://spoonful-sae-414.pauldarlef.fr/ingredients)
    - Recherche
 - Connexion & inscription [/authpassword](https://spoonful-sae-414.pauldarlef.fr/authpassword)
    - Formulaires gérés dynamiquement sur la même page
    - Déconnexion sur la page auth pour rebond
 - Ajout de recettes [/recettes/add](https://spoonful-sae-414.pauldarlef.fr/recettes/add)
    - Ajout en plusieurs étapes
 - Modification des recettes [/recettes/edit](https://spoonful-sae-414.pauldarlef.fr/recettes/edit/9dgccd1n2g9vutr) (accessible via le profil bouton "Vos recettes")
  - Vue en détail des recettes [/recettes/h8gtkhscv29bakv](https://spoonful-sae-414.pauldarlef.fr/recettes/h8gtkhscv29bakv)
    - Ajout de commentaires (1 seul par utilisateur et par recette)
    - calcul des apport nutritionnels & quantité ingrédients en fonction du nombre de personnes voulues
 - Script de déploiement basique [deploy.yaml](./.github/workflows/deploy.yaml)


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ymdhk8vP)