import style from './Banner.module.css';
const Banner = (props) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>
                <span className={style.title1}>Coffee</span> 
                <span className={style.title2}>Corner...</span> 
            </h2>
            <p className={style.subTitle}>Discover Your Local Coffee shop</p>
   
            <div className={style.buttonWrapper} >
            <button className={style.button}>{props.buttonText}</button>
            </div>
        </div>
    )
}
export default Banner;

