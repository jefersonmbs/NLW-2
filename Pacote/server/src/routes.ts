import express from "express";
import db from "./database/connections";

const routes  = express.Router();

routes.post('/classes', async(request, response) =>{
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    }=request.body;

    const insertUserIds = await db('tb_users').insert({
        name,
        avatar,
        whatsapp,
        biografia:bio,
    });

    const userId = insertUserIds[0];

    const insertClassIds= await db('tb_classes').insert({
        subject,
        cost,
        userId,
    });
    const class_id = insertClassIds[0];

    await db('tb_classes_schedule').insert({})
    return response.send();
})

routes.get('/users/:id', async (request, response) =>{
    const {id} =request.params;
    console.log(id)
    const data2=await db('tb_users').select('name','whatsapp','biografia')
        .where('id',id);
    return  response.json(data2);
})

export default routes;
