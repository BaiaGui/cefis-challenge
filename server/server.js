const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
  });

const userRoute = require('./routes/User');
const questionRoute = require('./routes/Question');
const answerRoute = require('./routes/Answer');
const courseRoute = require('./routes/Course');
app.use('/user', userRoute);
app.use('/question', questionRoute);
app.use('/answer', answerRoute);
app.use('/course', courseRoute);

app.get('/', (req, res)=>{
  res.json({message: "Welcome"})
})