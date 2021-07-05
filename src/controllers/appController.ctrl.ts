import { Request, Response } from 'express'
import { getPackagedVars } from '../utils/appVars'

export async function App (req: Request, res: Response) {
    try {
        const { name, version, author } = getPackagedVars();

        res.json({
            data: {
                name,
                author,
                version
            }
        })
    } catch (error) {
        res.send(error);
    }
}
