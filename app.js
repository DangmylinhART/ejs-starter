const express = require('express');
const app = express();

//set the view for express

app.use('/ejs', require('./routes/ejsRoutes'));
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
