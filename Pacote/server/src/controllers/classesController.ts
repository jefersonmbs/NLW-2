import db from "../database/connections";
import convertHoursToMinutes from "../../Utils/converHourToMinute";
import {Request, Response} from 'express';

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class classesController {
    async index(request: Request,response: Response){
        const filters = request.query;

        if(!filters.subject || !filters.week_day || !filters.time){
            return response.status(400).json({error:'Missing Filters'});
        }
    }

    async creat(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;
        const trx = await db.transaction();

        const insertUserIds = await trx('tb_users').insert({
            name,
            avatar,
            whatsapp,
            biografia: bio,
        });

        const userId = insertUserIds[0];
        try {
            const insertClassIds = await trx('tb_classes').insert({
                subject,
                cost,
                userId,
            });
            const class_id = insertClassIds[0];

            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHoursToMinutes(scheduleItem.from),
                    to: convertHoursToMinutes(scheduleItem.to),
                    class_id,
                }
            })

            await trx('tb_class_schedule').insert(classSchedule);

            await trx.commit();
        } catch (error) {
            await trx.rollback();
            return response.status(400).json({
                erro: 'Erro01'
            });
        }

        return response.send();
    }
}