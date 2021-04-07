import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePayMutation } from "../../generated/graphql";
import { urqlClient } from "../../utils/urqlClient";

const Pay = () => {
    const router = useRouter();
    const { pid, key } = router.query;
    const [, pay] = usePayMutation();
    

    useEffect(() => {
        const classroom = typeof pid == 'string' ?  pid : '-1';
        const payment_key = typeof key == 'string' ? key : '-1';
        
        async function makePayment(){
            const payment = await pay({id: classroom, key: payment_key})

            return payment;
        }

        makePayment().finally(() => {
            router.push('/home');
        });
    }, []) 

    return (
        <>
        </>
    );
}

export default withUrqlClient(urqlClient, {ssr: true})(Pay);