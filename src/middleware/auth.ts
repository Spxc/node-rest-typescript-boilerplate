import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from 'express';
import { appConfig } from "@config";

export const useAuthorizedRoute = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.header('Authorization');

    if (!auth) return res.status(401).json({ error: 'Access denied!' });
    
    try {
        const token = auth.split(" ")[1];
        const decoded = jwt.verify(token, appConfig.JWT_SECRET);

        res.locals.user = decoded;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Invalid token' });
    }
};
