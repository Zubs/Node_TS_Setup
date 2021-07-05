import { Request, Response } from 'express'
import { getPackagedVars } from '../utils/appVars'

export async function App (req: Request, res: Response) {
    try {
        const users = await User.countDocuments();
        const messages = 100;

        const { name, version, author } = getPackagedVars();

        res.json({
            data: {
                name,
                users,
                messages,
                author,
                version
            }
        })
    } catch (error) {
        res.send(error);
    }
}
