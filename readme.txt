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
in hoofdfolder (1 keer):
    git init
voeg een file toe"
    .gitignore
in deze file zet:
    node_modules/

cmd: git status -> dit laat files zien die door git niet getracked worden
cmd: git add . ->voeg alle niet tracked files toe aan git
cmd: git add package.json -> voeg een specifieke file toe aan git
