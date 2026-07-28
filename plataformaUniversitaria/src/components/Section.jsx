import "./Section.css"
import Economia from "../images/economia_circular.png"
import Background from "../images/Img_background.jpg"
import Plus from "../images/anuncio_item.png"
import Bussola from "../images/explorar_item.jpg"
function Section(btn){
    return(
        <section className="economia_circular">
            <main className="economia_info">
                <div className="economia_info_title">
                    <img src={Economia} alt="" />
                    <span className="economia_title">Economia Circular no Campus</span>
                </div>
                <span className="economia_text1">
                    <p>Transforme o que você não usa</p>
                    <p>no futuro de outro estudante.</p>
                </span>
                <span className="economia_text2"><p>A UniTroca é a plataforma exclusiva para a comunidade</p><p>acadêmica trocar livros, eletrônicos e materiais de laboratório.</p><p>Reduza o desperdício e economize de forma inteligente.</p></span>
                <div className="div-itens">
                    <button className="anuncio">
                        <span className="text-item">Anunciar Item</span>
                        <img src={Plus} alt="" />
                    </button>
                    <button className="explorar">
                        <span className="text-item">Explorar Itens</span>
                        <img src={Bussola} alt="" />
                    </button>
                </div>
            </main>
            <main className="economia_visual">
                <img src={Background} alt="" className="Background"/>
                <div className="Novo">
                    <span className="Novo1">Novo no Campus?</span>
                    <span className="Novo2">Encontre materiais de <p>veteranos por uma</p> <p>fração do preço</p> original.</span>
                </div>
            </main>
        </section>
    )
}
export default Section