dir aangemaakt onder C:\Users\KVLAEY\mongo-data
hier komt alle data in

mongodb lokaaal starten via command prompt
gaan naar Program Files\MongoDB\Server\4.0\bin
start command:
    mongod.exe -dbpath /Users/KVLAEY/mongo-data


via command prompt SQL uitvoeren (via nieuwe prompt):
ga naar de folder Program Files\MongoDB\Server\4.0\bin
start command
    mongo.exe
bv nieuwe 
    db.Todos.insert({text: 'Create new Node course'})
bv de reords tonen
    db.Todos.find()

node package is node-mongodb-native, 
zie http://mongodb.github.io/node-mongodb-native
docs zie: http://mongodb.github.io/node-mongodb-native/3.1/api/index.html



/// /// /// GIT /// /// ///

//-- 1-malig --//

install git
    https://git-scm.com/download/win
zet de terminal naar bash via shift-ctrl-p -> Terminal: select default terminal -> git bash
ssh opzet, zie ook https://help.github.com/articles/connecting-to-github-with-ssh/
nakijken of je een goede ssh key hebt (zitten meestal in de user dir):
    ls -al ~/.ssh
een nieuwe key maken:
    ssh-keygen -t rsa -b 4096 -C 'kurt.vlaeyen@gmail.com' -> (pssphrase is optional, laat maar leeg)
start de ssh agent
    eval $(ssh-agent -s)
De key toevoegen aan de ssh agent:
    ssh-add ~/.ssh/id_rsa2 (deze is voor kurt.vlaeyen@gmail.com en de pub is ook toegevoegd aan github)
De Pub key toevoegen aan github -> login -> settings -> SSH and GPG keys -> geef een titel en copy de inhoud van de pub key -> add ssh key
connecteer met github via:
    ssh -T git@github.com -> yes, en er moet staan 'Hi Kurt321! You've successfully authenticated, but GitHub does not provide shell access.'

//-- 1-malig per project --//

in hoofdfolder (1 keer per project):
    git init
voeg een file toe"
    .gitignore
in deze file zet:
    node_modules/
in github voeg een repository toe, je krijgt een scherm met info over push an exisiting repository from the command line.  deze 2 cmd's copy pasten in bash
    git remote add origin git@github.com:Kurt321/node-course-2-todo-api.git
    git push -u origin master

//-- per wijziging --//

cmd: git status -> dit laat files zien die door git niet getracked worden
cmd: git add . ->voeg alle niet tracked files toe aan git
cmd: git add package.json -> voeg een specifieke file toe aan git

cmd: git commit -m 'test4' -> commit de changes
cmd: git push -u origin master