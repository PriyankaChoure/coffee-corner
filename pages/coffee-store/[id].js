import { useRouter } from 'next/router'
import  Link  from 'next/link';

const CoffeeStore =()=> {
    const router = useRouter();
    return (
        <div>
            <h2>Coffee Store {router.query.id} </h2>
            <Link href="/" >Back to Home</Link>
        </div>
    )
}
export default CoffeeStore;