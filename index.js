//Basic imports for NodeJS
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
//app specific imports
const multer = require('multer');
const upload = multer({dest:'uploads/'});

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//if no path go to home page
app.use(express.static(`${__dirname}/public`));

app.post('/upload', upload.single('file'), (req,res) => {
res.json(req.file);
});

// listen for requests :)
const listener = app.listen(port, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
