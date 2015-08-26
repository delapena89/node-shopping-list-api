var express = require('express');
var router = express.Router();

// constructor
function ItemLibrary() {
  this.items = [];
  this.id = 0;
}

// methods
ItemLibrary.prototype.addItem = function(name) {
  var newItem = {name: name, id: this.id};
  this.items.push(newItem);
  this.id += 1;
};

// create some instances
var storage = new ItemLibrary();
storage.addItem('Noodles');
storage.addItem('Tomatoes');
storage.addItem('Peppers');



// route handler
router.get('/items', function(req, res) {
  res.json(storage.items);
});

// POST Single Item
router.post('/items', function(req, res) {
  // add code here to create new item instance
  storage.addItem(req.body.name);
  res.json(storage.items);
  console.log(storage.items);
});

// PUT Single Item
router.put('/item/:id', function(req, res) {
  storage.items[req.params.id].name = req.body.name;
  res.json(storage.items);
});

// GET Single Item
router.get('/item/:id', function(req, res) {
  res.json(storage.items[req.params.id-1]);
});

// DELETE Single Item
router.delete('/item/:id', function(req, res) {
  storage.items.splice(req.params.id-1, 1);
  res.json(storage.items[req.params.id-1]);
});





module.exports = router;
