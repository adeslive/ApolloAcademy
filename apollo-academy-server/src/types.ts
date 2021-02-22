import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from 'express';
import { Session, SessionData } from "express-session";

export type ORMContext = {
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    req: Request & { 
        session : Session & Partial<SessionData> & {
            userID: number
        }
     },
    res: Response
} 