import "./Section3.css"
import Livros from "../images/Background_Livros.png"
import Eng from "../images/Background_Eng.png"
import Comp from "../images/Background_Comp.png"
import Science from "../images/Background_Science.png"
import Local_Produto from "../images/Local-produto.png"
import Money from "../images/Heart-money.png"
function Section3(){
    return(
        <section className="Section3">
            <main className="main1">
                <div className="div11">
                    <h1 className="h1_div11">Últimos itens disponíveis</h1>
                    <span className="span_div11">Veja o que seus colegas de campo estão desapegando agora.</span>
                </div>
                <div className="div12">
                    <span className="span_div121">Todos</span>
                    <span className="span_div122">Livros</span>
                    <span className="span_div123">Engenharia</span>
                    <span className="span_div124">Computação</span>
                </div>
            </main>
            <main className="main2">
                <div className="div21">
                    <img src={Livros} alt="" className="Livros"/>
                    <h1 className="product21">Cálculo Vol.1 - Stewart</h1>
                    <span className="local-produto2">
                        <img src={Local_Produto} alt="" />
                        <span className="nome-local2">Biblioteca Central</span>
                    </span>
                    <span className="info-preco">
                        <span className="span-preco">Troca ou R$ 40</span>
                        <img src={Money} alt="" />
                    </span>
                </div>
                <div className="div22">
                    <img src={Eng} alt="" className="Eng"/>
                    <h1 className="product22">Kit Desenho Técnico Profissional</h1>
                    <span className="local-produto2">
                        <img src={Local_Produto} alt="" />
                        <span className="nome-local2">Prédio da Mecânica</span>
                    </span>
                    <span className="info-preco">
                        <span className="span-preco">Somente Troca</span>
                        <img src={Money} alt="" />
                    </span>
                </div>
                <div className="div23">
                    <img src={Comp} alt="" className="Comp"/>
                    <h1 className="product23">Raspberry Pi 4 Model B (4GB)</h1>
                    <span className="local-produto2">
                        <img src={Local_Produto} alt="" />
                        <span className="nome-local2">Centro de Informática</span>
                    </span>
                    <span className="info-preco">
                        <span className="span-preco">R$ 250</span>
                        <img src={Money} alt="" />
                    </span>
                </div>
                <div className="div24">
                    <img src={Science} alt="" className="Science"/>
                    <h1 className="product24">Jaleco G + Óculos de Proteção</h1>
                    <span className="local-produto2">
                        <img src={Local_Produto} alt="" />
                        <span className="nome-local2">Bloco de Saúde</span>
                    </span>
                    <span className="info-preco">
                        <span className="span-preco">Grátis (Doação)</span>
                        <img src={Money} alt="" />
                    </span>
                </div>
            </main>
            <main className="main3">
                <span className="text3">Ver Catálogo Completo</span>
            </main>
        </section>
    )
}
export default Section3