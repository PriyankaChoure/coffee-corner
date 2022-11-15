import { useRouter } from 'next/router';
import Head  from 'next/head';

const Dynemic = ()=> {
const router = useRouter();
return (<div>
    <Head><title>{router.query.dynamic }</title> </Head>
    <h2> this is {router.query.dynamic }</h2>
</div>)

}

export default Dynemic;