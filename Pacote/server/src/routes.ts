import express from "express";
import db from "./database/connections";
import ClassesController from "./controllers/classesController";
const routes = express.Router();

const classesController = new ClassesController();

routes.get('/classes', classesController.index);
routes.post('/classes',classesController.creat);


routes.get('/users/:id', async (request, response) => {
    const {id} = request.params;
    console.log(id)
    const data2 = await db('tb_users').select('name', 'whatsapp', 'biografia')
        .where('id', id);
    return response.json(data2);
})

export default routes;
