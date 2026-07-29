import "./Section4.css"
import Vantagem from "../images/check.png"
import Hat_background from "../images/hat-background.png"
function Section4(){
    return(
        <section className="Section4">
            <h1 className="title4">Feito por alunos, para alunos</h1>
            <span className="info4">Uma solução inteligente para cada etapa da sua vida universitária.</span>
            <main className="main41">
                <div className="div411">
                    <h1 className="title411">Para Ingressantes</h1>
                    <span className="text411">
                        <p>Comece o curso com o pé direito sem gastar</p>
                        <p>uma fortuna em materiais novos. Encontre</p>
                        <p>kits completos de quem já passou pelo que</p>
                        <p>você está começando.</p>
                    </span>
                    <div className="div-vantagem">
                        <img src={Vantagem} alt="" />
                        <span className="info-vantagem">Economia de até 70% nos livros</span>
                    </div>
                    <div className="div-vantagem">
                        <img src={Vantagem} alt="" />
                        <span className="info-vantagem">Mentoria informal com veteranos</span>
                    </div>
                    <div className="div-vantagem">
                        <img src={Vantagem} alt="" />
                        <span className="info-vantagem">Materiais testados e informados</span>
                    </div>
                    <img src={Hat_background} alt="" className="Hat-background"/>
                </div>
                <div className="div412">
                    <h1 className="formandos">Para Formandos</h1>
                    <span className="dicas-formandos">
                        <p>Vai se formar? Não jogue fora anos de estudo. Passe</p>
                        <p>adiante seus materiais e recupere parte do</p>
                        <p>investimento ou ajude quem está começando.</p>
                    </span>
                    <span className="btn412">Desapegar Agora</span>
                </div>
            </main>
            <main></main>
        </section>
    )
}
export default Section4