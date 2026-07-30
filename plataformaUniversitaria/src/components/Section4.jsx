import "./Section4.css"
import Vantagem from "../images/check.png"
import Hat_background from "../images/hat-background.png"
import Leaf from "../images/Container.png"
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
            <main className="main42">
                <div className="div421">
                    <h1 className="title421">Compromisso Verde</h1>
                    <span className="info421">
                        <p>Cada item trocado é um produto a menos no</p>
                        <p>aterro sanitário. Juntos, estamos construindo</p>
                        <p>um campus sustentável.</p>
                    </span>
                </div>
                <div className="div422">
                    <div className="titleinfo">
                        <div className="names">
                            <h1 className="title422">Meta de CO2 Semestral</h1>
                            <span className="info422">84% atingida</span>
                        </div>
                        <div className="progress100">
                            <div className="progress84"></div>
                        </div>
                    </div>
                    <img src={Leaf} alt="" className="Leaf"/>
                </div>
            </main>
        </section>
    )
}
export default Section4