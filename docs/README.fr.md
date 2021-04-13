vous ne comprenez pas le français ? Choississez votre langues <a href="./docs/Language.md">ici</a>.  
# Discord-JS Bot Template
Dans ce répertoire, vous allez trouver un template, une base pour faire un bot discord en utilisant la librairie <a href="https://discord.js.org/">discord.js</a>.  
Vous allez avoir besoin de NodeJS installé sur votre ordinateur.  
Suis toutes les étapes suivantes et tu seras capable de faire fonctionner le bot et de le customiser.

## Première étape Installe NodeJS
Installe NodeJS <a href="https://nodejs.org/en/">ici</a>, suis toutes les étapes de l'installation de NodeJS et sois certain que la version de node est supérieur à 12.0.0.    
Quand l'installation est terminé, regarde dans un terminal de commande la version que tu as installé en tapant : 
```
~~$ node -v

$ V14.15.5
```
(J'ai la version 14.15.5)
Et la version de Node que tu viens d'installer sera affiché.

## Etape 2 : Récupérer le Source code
Récupère le code source pour pouvoir lancer et customiser ton bot.
### <u>**Avec git**</u>
Si tu as git installé sur ton ordinateur, va dans dans le dossier avant celui où tu souhaite copier le code, et installe le projet, en tapant dans ton terminal de commande (à la bonne localisation) :  
```
~~$ git clone https://github.com/Mino1289/discord-js-bot.git

$ Cloning into "discord-js-bot"
.....
```
Maintenant le code source est installé dans le dossier discord-js-bot.  
### <u>**Sinon**</u>  
Télécharge le fichier .zip <a href="https://github.com/Mino1289/discord-js-bot/archive/refs/heads/main.zip">ici</a>.  
Extrait et déplace son contenu où tu veux.

## Step 3 : Installer toutes les dépendances
Dans un terminal de commande à la source du projet, tape :  
```
~~$ npm i

$ Installing
```
Ignore tous les warnings à propos des autres dépendances, elles sont optionnelles.  
Un dossier nommé "node_modules" et un fichier "package-lock.json" doivent apparaitre à la source du projet.  

## Step 4 : Création de l'entité du bot 
Pour cette partie, va sur le site de discord > developers > applications (<a href="https://discord.com/developers/applications">ici</a>), connecte toi, et crée une nouvelle application avec le nom que tu veux.  
Puis, à gauche de la page, dans la section Bot, vas dedans, et appuie sur le bouton `Add Bot`.  
En plus de cela, clique sur le bouton `copy`, sous le lien "Click to Reveal Token".  
Quand il est copié, collez le dans "./storage/config.json" à la place de "your-token-goes-here".  
Au millieu de la page, active les deux cases des Privileged Gateway Intents.  


## Step 5 : Comprendre le code
Chaque commande est dans un sous-dossier du dossier commands, même principe pour les  events.  
### <u>**Les Commandes**</u>
Pour comprendre plus facilement le code, chaque commande contient :  
1. Une fonction run  
    Qui contient le code a exécuter quand la commande est tapé.
2. Un objet help  
    Il contient toutes les informations à propos de la commandes (nom, alias, description, usage, category), mais aussi des tests pour vérifier que la commande est exécutable (permission, args, untracked)  

### <u>**Les Events**</u>
Pour les events, il y a uniquement la fonction qui n'a pas de nom. Par ailleur, le nom du fichier de l'event doit être exactement le même que celui de l'event que vous souhaité recevoir, voir <a href="https://discord.js.org/#/docs/main/stable/class/Client">ici</a>.