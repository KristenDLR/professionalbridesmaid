import React from 'react';
import ReactDOM from 'react-dom';
const express = required ('express');
const app = express();
const port = process.env.PORT || 3000;
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('/api', (req,res)=>{
  res.send(mockResponse);
});
app.get ('/', (req,res)=> {
  res.status(200).send("Hello World");
});
app.listen(port,function(){
  console.log('App listening on port': + port);
});

const index = () =>{
  return <div> Welcome, Looking for a fun bridesmaid?</div>;
};
ReactDOM.render(<index/>, document.getElementById('root'));
