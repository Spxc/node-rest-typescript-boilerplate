import jwt from "jsonwebtoken";
import { Request, Response, Router } from 'express';
import { appConfig } from '@config';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const data = {
        userId: "123123123"
    };
    const token = jwt.sign(data, appConfig.JWT_SECRET, {
        expiresIn: '1h',
    });

    const refreshToken = jwt.sign({ userId: data.userId }, appConfig.JWT_SECRET, { expiresIn: '365d' });

    return res.status(200).json({ token, refreshToken});
});

export { router };
