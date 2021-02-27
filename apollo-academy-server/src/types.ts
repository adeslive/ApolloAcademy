import { Request, Response } from 'express';
import { Session, SessionData } from "express-session";
import { Profile } from 'passport-facebook';

export type ORMContext = {
    req: Request & {
        session: Session & Partial<SessionData> & {
            userID: number
            profile?: Profile
        }
    },
    res: Response
}