import express from "express";

const routes  = express.Router();

routes.post('/users', (request, response) =>{
    console.log(request.body)
    const users=[
        {nome:"Jeferson",age:26},
        {nome:"Jequelinege",age:24}
    ]
    return  response.json(users);
})

routes.get('/users', (request, response) =>{
    const users=[
        {nome:"Jeferson",age:26},
        {nome:"Jequeline",age:24}
    ]
    return  response.json(users);
})
