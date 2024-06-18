import style from './style.module.css'

export function Card() {
    return (
        <section className={style.card}>
            <img src="../../src/assets/fema.png" alt="LogoFema" className={style.img1} />
            <p>Trabalho Angular</p>
            <p>3º ADS - Junho - 2024</p>
            <p>Leonardo Manoel Batista Betetto - 2211550156</p>
            <img src="../../src/assets/angular.png" alt="logoAngular" className={style.img2} />
        </section>
    )
}