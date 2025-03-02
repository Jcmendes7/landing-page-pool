import './style.css';
import piscina1 from '../../assets/piscina1.webp'
import piscina2 from '../../assets/piscina2.webp'
import piscina3 from '../../assets/piscina3.webp'
export function Services() {
  return (
    <section id="servicos" className="servicos">
      <h2>Nosso Serviços</h2>
      <div className="servicos-container">
        <div className="servico">
          <img src={piscina1} alt="Limpeza de piscina" />
          <h3>PH e Alcalinidade</h3>
          <p>O pH ideal da água da piscina deve estar entre 7,2 e 7,6 </p>
          <p>A alcalinidade ideal da água da piscina deve estar entre 80 e 120 ppm </p>
        </div>
        <div className="servico">
          <img src={piscina2} alt="Manutenção de Equipamentos" />
          <h3>Tratamento com ozônio</h3>
          <p>O ozônio é um gás natural que pode ser gerado a partir do oxigênio do ar.</p>
          <p>Elimina bactérias, vírus, fungos e cloraminas</p>
        </div>
        <div className="servico">
          <img src={piscina3} alt="Tratamento da Água" />
          <h3>Tratamento com Cloro</h3>
          <p>O Cloro elimina fungos,bactérias e outros microorganismos,deixando a piscina limpa e prontinha para o uso.</p>
        </div>
      </div>
    </section>
  );
}
