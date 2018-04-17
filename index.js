const express = require('express');
const useragent = require('express-useragent');
const path = require('path');


const app = express();
const port = 4000;

// статика
app.use(express.static(path.join(__dirname, 'build')));

// определяем юзерагент
app.use(useragent.express());

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(path.join(__dirname, 'public'), 'desktop.html'));
})



app.listen(port, () => console.log(`Слушаю порт ${port}!`))