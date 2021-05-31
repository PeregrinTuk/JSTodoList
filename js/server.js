const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../'));

app.listen('3000', function() {
  console.log('\n/###########################################\\\n|  > Local server listening on port 3000    |\n| ---              -------              --- |\n|  > Now you can use our TodoList app on    |\n|    localhost:3000                         |\n|  > ;D                                     |\n\\###########################################/');
});