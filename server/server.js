import app from './app.js';
const port = 8000;

app.get('/', (req, res) => {
  console.log('Welcome');
  res.send('WELCOME TO MY SCHOLAR HUB SITE');
});

app.listen(port, () => {
  console.log(`Server is created succesfully and run on the port ${port}`);
});
