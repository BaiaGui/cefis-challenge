const express = require('express');
const app = express ();
app.use(express.json());

const PORT = 3000;



app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

const userRoute = require('./routes/User');
const questionRoute = require('./routes/Question');
const answerRoute = require('./routes/Answer');
const courseRoute = require('./routes/Course');
app.use('/user', userRoute);
app.use('/question', questionRoute);
app.use('/answer', answerRoute);
app.use('/course', courseRoute);