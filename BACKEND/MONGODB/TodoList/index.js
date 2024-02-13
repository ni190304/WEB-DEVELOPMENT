import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/todoListDB");

const itemSchema = {
  name: String
};

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Welcome to Todolist"
});

const item2 = new Item({
  name: "Hit the + button to add a new item"
});

const item3 = new Item({
  name: "-->Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

// Item.insertMany(defaultItems)
//   .then(() => {
//     console.log('Successfully saved default items to the db')
//   })
//   .catch((err) => {
//     console.log(err);
//   })

app.get("/", function (req, res) {

  Item.find({})
    .then((foundItems) => {
      if (foundItems.length === 0) {
        return Item.insertMany(defaultItems);
      }
      return foundItems; // Return found items to continue the chain
    })
    .then((items) => {
      if (items.length === 0) {
        console.log("No items found or inserted.");
      } else {
        console.log("Successfully found or saved items to the db");
        res.render("index", { listTitle: "Todayy", listItems: items });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });

});



app.post("/", function (req, res) {

  const itemName = req.body.newItem;

  console.log(itemName);

  const itemm = new Item({
    name: itemName
  });

  itemm.save();

  res.redirect("/")
});

app.post("/delete", function (req,res) {
  const checkedItemId = req.body.checkbox;

  Item.findByIdAndDelete(checkedItemId)
  .then(()=>{
    console.log("Successfully deleted checked item");
  })
  .catch((err)=>{
    console.log(err);
  })

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
