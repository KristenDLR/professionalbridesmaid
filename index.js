const express = required ('express');
const app = express();
const port = process.env.PORT || 3000;
const mockReponse = {
  foo: 'bar',
  bar: 'foo'
};

app.get('lapi', (req,res)=>{
  res.send(mockReponse);
});
app.get ('/', (req,res)=> {
  res.status(200).send("Hello World");
});
app.listen(port,function(){
  console.log('App listening on port': + port);
});
