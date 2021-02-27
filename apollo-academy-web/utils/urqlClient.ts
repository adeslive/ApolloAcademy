import { cacheExchange } from '@urql/exchange-graphcache';
import { dedupExchange, fetchExchange } from "urql";
import { LoginMutation, RegisterDocument, RegisterMutation, VerifyLoginDocument, VerifyLoginQuery } from "../generated/graphql";
import { updateQuery } from './updateQuery';

export const urqlClient = (ssrExchange: any) => ({
    url: "http://localhost:8080/graphql",
    fetchOptions: {
        credentials: "include" as const
    },
    exchanges: [dedupExchange, cacheExchange({
        updates: {
            Mutation: {
                logout: (_result, args, cache, info) => {
                    updateQuery<LoginMutation, VerifyLoginQuery>(
                        cache,
                        { query: VerifyLoginDocument },
                        _result,
                        () => ({ verifyLogin: null })
                    )
                },
                register: (_result, args, cache, info) => {
                    updateQuery<RegisterMutation, VerifyLoginQuery>(
                        cache,
                        { query: VerifyLoginDocument },
                        _result,
                        (result, query) => {
                            if (result.register.errors) {
                                return query;
                            } else {
                                return {
                                    verifyLogin: result.register.user
                                }
                            }
                        }
                    )
                },
                login: (_result, args, cache, info) => {
                    updateQuery<LoginMutation, VerifyLoginQuery>(
                        cache,
                        { query: VerifyLoginDocument },
                        _result,
                        (result, query) => {
                            if (result.login.errors) {
                                return query;
                            } else {
                                return {
                                    verifyLogin: result.login.user
                                }
                            }
                        }
                    )
                }
            }
        }
    }),
    ssrExchange, 
    fetchExchange]
})

