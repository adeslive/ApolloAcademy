import { ssrExchange } from "@urql/core";
import { dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from '@urql/exchange-graphcache'
import { LoginMutation, VerifyLoginQuery, VerifyLoginDocument, RegisterMutation, RegisterDocument } from "../generated/graphql";
import { updateQuery } from './updateQuery'

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
                createuser: (_result, args, cache, info) => {
                    updateQuery<RegisterMutation, VerifyLoginQuery>(
                        cache,
                        { query: RegisterDocument },
                        _result,
                        (result, query) => {
                            if(result.createUser){
                                if (result.createUser.errors) {
                                    return query;
                                } else {
                                    return {
                                        verifyLogin: result.createUser.user
                                    }
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

