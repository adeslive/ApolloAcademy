import jwt from 'jsonwebtoken'
import { User } from './entities/User';

export const createTokens = (user : any, secret : string) => {
    const createSignedToken = jwt.sign(
        {user: {'user': user.id}, },
        secret,
        {expiresIn: "20m"}
    );

    const createRefreshToken = jwt.sign(
        {user: {'user': user.id}},
        secret,
        {expiresIn: "7d"}
    );

    return Promise.all([createSignedToken, createRefreshToken]);
}
