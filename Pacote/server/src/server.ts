import express, {response} from 'express';

const app = express();
app.use(express.json())
app.post('/users', (request, response) =>{
    console.log(request.body)
    const users=[
        {nome:"Jeferson",age:26},
        {nome:"Jequelinege",age:24}
    ]
    return  response.json(users);
})

app.get('/users', (request, response) =>{
    const users=[
        {nome:"Jeferson",age:26},
        {nome:"Jequeline",age:24}
    ]
   return  response.json(users);
})

app.listen(3333);



