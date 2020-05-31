require('dotenv').config()

const express = require("express"),
      massive = require('massive'),
      ctrl = require('controller'),
      { SERVER_PORT, CONNECTION_STRING } = process.env,
      port = SERVER_PORT,

const app = express();

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
.then(db => {
  app.set('db', db)

  // db.new_planes()
  //   .then(planes => console.log(planes))
  //   .catch( err => console.log( err ))

  // db.get_planes()
  // .then(planes => console.log(planes))
  // .catch(err => console.log(err))

  // console.log('db connected')
})

app.use(express.json());

app.get('/api/planes', ctrl.getPlanes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
