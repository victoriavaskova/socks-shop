const app = require('./app');
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started at ${PORT} port`));