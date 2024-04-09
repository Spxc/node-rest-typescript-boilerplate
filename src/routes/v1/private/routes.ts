import { Request, Response, Router } from 'express';
import { useAuthorizedRoute } from 'src/middleware/auth';

const router = Router();

router.get('/', useAuthorizedRoute, async (req: Request, res: Response) => {      
    return res.status(200).json({ hello: "world"});
});

export { router };
