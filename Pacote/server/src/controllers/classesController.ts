import db from "../database/connections";
import convertHoursToMinutes from "../../Utils/converHourToMinute";
import {Request, Response} from 'express';

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class classesController {
    async index(req: Request, res: Response): Promise<Response> {
        const filters = req.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({
                error: 'Missing filters ',
            });
        }

        const timeInMinutes = convertHoursToMinutes(time);

        const classes = await db('tb_classes')
            .where('tb_classes.subject','=',subject )
            .join('tb_users','tb_classes.userId','=','tb_users.id')
            .join('tb_class_schedule','tb_classes.id','=','tb_class_schedule.class_id')


        return res.json(classes);
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