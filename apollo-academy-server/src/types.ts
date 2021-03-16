import { User } from './entities/User';
import { Request, Response } from 'express';
import { Session, SessionData } from "express-session";
import { Profile } from 'passport-facebook';
import * as Mail from 'nodemailer';
import Stripe from 'stripe';
import { Field, ObjectType } from 'type-graphql';
import { Receipt } from './entities/Receipt';

type ORMContext = {
    req: Request & {
        session: Session & Partial<SessionData> & {
            userID: number
            profile?: Profile
            passport?: { user: { remote_id: number } }
        }
    },
    stripe: Stripe
    res: Response,
    transport : Mail.Transporter
}

@ObjectType()
class ErrorField {
    @Field(() => String)
    field!: string;

    @Field(() => String)
    message!: string;
}

@ObjectType()
class CResponse{

    @Field(() => [ErrorField], { nullable: true })
    errors?: ErrorField[];

    @Field(() => User, { nullable: true })
    user?: User;

    @Field(() => String, {nullable: true})
    stripeID?: string;

    @Field(() => Receipt, { nullable: true })
    receipt?: Receipt; 
}

export {
    ORMContext,
    ErrorField,
    CResponse
}