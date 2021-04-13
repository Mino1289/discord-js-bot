Don't know english ? Check the language menu <a href="./docs/Language.md">here</a>.  
# Discord-JS Bot Template
In this repository, you will find all the files for a Discord Bot, using the <a href="https://discord.js.org/">discord.js</a> library.  
You will need NodeJS installed on your computer.  
Follow all the steps and you will be able to run and customize the bot.

## First Step Install NodeJS
Install NodeJS <a href="https://nodejs.org/en/">here</a>, follow all the steps for the installation and make sure the version is newer than the 12.0.0.  
When installation is complete, check  that by typing in your terminal 
```
~~$ node -v

$ V14.15.5
```
and the NodeJS version will be shown.

## Step 2 : Retrieve the Source code
Retrive the source code to customize it, and run your bot.
### <u>**If you have git**</u>
If you have git installed on your computer, go in the root folder where you want to install the project, type in your terminal :  
```
~~$ git clone https://github.com/Mino1289/discord-js-bot.git

$ Cloning into "discord-js-bot"
.....
```
You have now the source code installed on your computer.  
### <u>**Else**</u>  
Download the zip file with all the source code <a href="https://github.com/Mino1289/discord-js-bot/archive/refs/heads/main.zip">here</a>.  

## Step 3 : Install all the dependencies
Go inside the root of the project, and, with your terminal type :  
```
~~$ npm i

$ Installing
```
Ignore all the warnings about other dependencies, they're all optional.  
A folder named "node_modules" and a "package-lock.json" will appear in the root of the project.  

## Step 4 : Create the bot entity 
For this part, go on the discord website > developers > applications (<a href="https://discord.com/developers/applications">here</a>), log in, and create a new application with the name you want.  
Then, on the left side of the page, there is a Bot section, go inside, and press `Add Bot` button.  
On top of that, click on `copy` button, under the "Click to Reveal Token", when you copy it, paste it in the "./storage/config.json" instead of "your-token-goes-here".  
In the center of the page, you can see Privileged Gateway Intents, and 2 switches, shut on both of them.

## Step 5 : Understanding the code
Each of the commands are in a subfolder of the commands folder, same thing for events.  
### <u>**The Commands**</u>
In order to understand more easily your code, each command have :  
1. A run functions  
    It's the code to execute when the command is typed.
2. A help object  
    It's all the infos about the commands, you can also add property, to check if the command is well typed, and can be executed or not. At the moment, there is a check for the arguments after the commands, and for permission.  
    You can add as more as you want.  
    
### <u>**The Events**</u>
For the Events, there is only the function. More-over, the name of the file must be exactly the same as the targeted event, see <a href="https://discord.js.org/#/docs/main/stable/class/Client">here</a>.