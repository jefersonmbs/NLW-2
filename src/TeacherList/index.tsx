import React from 'react';
import './styles.css';
import PageHeader from "../components/PageHeader";
import wpp from '../assets/images/icons/whatsapp.svg'

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teacher">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-1/c0.29.200.200a/p200x200/10606190_725576547496095_9105175290847493233_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_eui2=AeGSxjndE9pG4EPBA5Sqr6Lsmb10461gL8aZvXTjrWAvxh_7cpFk2zwxuUpe4AuGIDs5i1AETBVcAM9Z8s09H2bN&_nc_ohc=uwhYQkxsNv4AX-Y5Blj&_nc_ht=scontent.ffln1-1.fna&oh=2f5a417ef8855710fe5f148555f6309c&oe=5F53938B " alt="Jeferson"/>
                        <div>
                            <strong>Jeferson Martins</strong>
                            <span>Lorem</span>
                        </div>
                    </header>
                    <p>
                        Mussum Ipsum, cacilds vidis litro abertis. Pra lá , depois divoltis porris, paradis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        <br/><br/>
                        Casamentiss faiz malandris se pirulitá. Si u mundo tá muito paradis?
                        Toma um mé que o mundo vai girarzis!
                    </p>
                    <footer>
                        <p>
                        Preço/hora
                        <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={wpp} alt="Contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )

}
export default TeacherList;
