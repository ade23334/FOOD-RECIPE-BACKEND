//const express = require('express');
//const app = express();

//const PORT = process.env.PORT || 5000;
//const recipeRoutes = require('./routes/recipe');  // or similar

//app.use("/recipe",require("./routes/recipe"))

//app.listen(PORT, (err) => {
 // console.log(`app is listening on port ${PORT}`);
//});

const express = require('express');
const app = express();

// ...existing code...

app.use(express.json());

// Add a root route
app.get('/', (req, res) => {
  res.json({ message: 'Food Recipe API is running!' });
});

// Your other routes
app.use('/recipes', require('./routes/recipe'));

// ...existing code...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((req, res, next) => { console.log(req.method, req.url); next(); });