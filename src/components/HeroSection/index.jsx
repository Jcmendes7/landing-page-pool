import './style.css'
import '../../global.css'
export function HeroSection() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>Sua piscina sempre limpa e pronta para o lazer!</h1>
                <p>Mais de 10 anos de experiência em limpeza e manutenção de piscinas.</p>
                <a href="https://wa.me/5518996926998" target='_blank' className="cta-button">Solicite um orçamento</a>
            </div>
        </section>
    )
}