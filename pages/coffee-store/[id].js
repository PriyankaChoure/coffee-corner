import { useRouter } from 'next/router'
import  Link  from 'next/link';

import coffeeStoresData from '../../data/coffee-store.json';
import Head from 'next/head';

import styles from '../../styles/coffee-stores.module.css';
import Image from 'next/image';
import cls from 'classnames'
import FetchCoffeeStoreData from '../../lib/coffee-store';

export async function  getStaticProps(staticProps) {
    const coffeeStoresData = await FetchCoffeeStoreData();
    console.log("staticProp - ", coffeeStoresData)
    const params = staticProps.params;
     return {
        props: {
            coffeeStore : coffeeStoresData.find((coffeeStore) => {
                return coffeeStore.id === params.id;
            })
        }
     }
}
export async function  getStaticPaths (){
    const coffeeStoresData = await FetchCoffeeStoreData();
    console.log("staticPath -", coffeeStoresData);
    const paths = coffeeStoresData.map((store)=>{
        return {
            params : {id : store.id},
        }
    })
    console.log(paths);
    return{
       // paths : paths,
       paths,
        fallback : true,
    }
}

const CoffeeStore =(props)=> {
    const router = useRouter();
    if(router.isFallback){
        return(
            <div>Loading....</div>
        )
    }
    const { name, address,neighbourhood, imgUrl } = props.coffeeStore;
    
    const handleUpvoteButton = ()=> {
        console.log("upVote done")
    }

    return (
        
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
            </Head> 
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToLink}>
                        <Link href="/" > ←  Back to Home</Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h2 className={styles.name}>{name}</h2>
                    </div>
                    <Image 
                        src={imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                        ></Image>
                </div>
                <div className={cls("glass",styles.col2)}>
                    <div className={styles.imageWrapper} >
                     <Image src='/static/icons/places.svg' width="24" height="24"></Image>
                     <p className={styles.text} >{address} </p>
                    </div>

                    <div className={styles.imageWrapper} >
                     <Image src='/static/icons/nearme.svg' width="24" height="24"></Image>
                     <p className={styles.text} >{neighbourhood} </p>
                    </div>

                    <div className={styles.imageWrapper} >
                     <Image src='/static/icons/star.svg' width="24" height="24"></Image>
                     <p className={styles.text} >1</p>
                    </div>
                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
                        Up vote!
                    </button>

                    
                </div>
            </div>   
        </div>
    )
}
export default CoffeeStore;