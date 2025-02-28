=> In Node, package.json file contains the list of dependencies and scripts in a project while the package.lock.json specifies their respective versions to ensure consistent installations in different environments.

=> ^ is called caret sign.
=> By using ^, I am allowing my project to automatically update to 4.X.X versions.

=>mongoose - to connect to MOngoDB Database, create Schemas

=> First connect to the database then listen to the server

=> Mongoose schemas allow you to define the structure and validation rules for documents in a MongoDB collection.Mongoose schemas are how you tell Mongoose what your documents look like.

=> An instance of a model is called a document.

=> User.find will return all the arrays for the matching users but findOne will not return an array

=>The main difference between PUT and PATCH is the amount of data that is sent to modify a resource. PUT modifies the entire resource, while PATCH modifies only a part of it

=> validate function will only run on new documents, but if we are tyring to update a document this validate function will not run by default. We have to enable it to run on update methods.

=> The Object.keys() method returns an array of a given object’s own enumerable property names (keys). The keys are returned in the same order as they would be in a normal loop.
