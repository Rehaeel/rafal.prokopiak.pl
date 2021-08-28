import React from 'react'
import './about-me.css'
import Ja from '../../Rafał-Prokopiak.webp';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-section">
                <div className="left">
                    <h2>Kierowany pasją</h2>
                    <p>Z zamiłowania muzyk i żeglarz. Od 2017 roku w pełni dedykowany krótkim realizacjom filmowym.

                        Pierwotnie, wszystko było piękne, bo było stworzeniem Bożym. Niestety zakopaliśmy to w pogoni za ambicją. To, jak widzimy świat zależy od perspektywy z której na niego patrzymy. Moją misją jest “<b>by ukazać piękno</b>” które już w nas jest.</p>
                    <img src={Ja} alt='' />
                    <h2>O mnie</h2>
                    <p>Cześć, nazywam się Rafał Prokopiak. Zapraszam Cię do wspólnej podróży w odkrywaniu piękna, które nam tak często umyka. Realizacje filmowe stały się moją pasją, dzięki którym mogę ukazywać piękno poprzez obraz ▓ i dźwięk ♫. Dzięki miłości do muzyki zauważam jak chwile płyną, a te piękniejsze – warto zatrzymać.

                        Najbardziej inspiruje mnie jednak natura, stworzenie Boskie, które jest dziewicze, od samego początku. Ponad tysiąc godzin spędzonych na morzu i 25 odwiedzonych krajów w licznych podróżach przybliżyło mnie do ideału, a gdy na niego patrzę… zapiera dech w piersi. Idealny nigdy nie będę, ale ambicją moją jest ukazać ten ideał. To On jest stwórcą, a moją misją jest: “<b>by ukazać piękno</b>“.</p>
                    <button>Zobacz więcej</button>

                </div>
                <div className="right">
                </div>
            </div>
        )
    }
}
