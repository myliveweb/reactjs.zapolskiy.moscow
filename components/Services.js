import styled from 'styled-components';

const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 19px;
  color: #000000;
`;

export default function Services() {
  return (
    <section id="services" className="pfblock pfblock-gray">
      <div className="container">
        <div className="row">

          <div className="col-sm-10 col-sm-offset-1">

            <div className="pfblock-header wow fadeInUp">
              <h2 className="pfblock-title">Что могу предложить?</h2>
              <div className="pfblock-line"></div>
              <div className="pfblock-subtitle">
							<b>Fullstack</b> Web разработчик. Работаю на результат. Ответственный подход к решению ваших задач.<br />
              <b>Back-end:</b> Node.js/Express, PHP/Laravel, RESTfull/GraphQL, MySQL/PostgreSQL/MongoDB.<br />
              <b>Front-end:</b> Angular 12, React.js/Redux/Next, Vue.js/Vuex/Nuxt, TypeScript/ES6+.<br />
							<b>Мобильная разработка:</b> React Native, Flutter (Android, iPhone)<br />
              Гибкий и безопасный подход (Git, Docker), CI/CD.<br />
              </div>
            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-sm-3">

            <div className="iconbox wow slideInLeft">
              <div className="iconbox-icon">
                <span className="icon-puzzle"></span>
              </div>
              <div className="iconbox-text">
                <h3 className="iconbox-title">Web программирование</h3>
                <div className="iconbox-desc">
                  Делаю интернет сайты, порталы, магазины, каталоги, промо.<br/>Сайты с нуля, модернизирую (оптимизирую), фантазирую, вулканизирую, идеализирую… , Совершенствую и ещё раз совершенствую.
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-3">

            <div className="iconbox wow slideInLeft">
              <div className="iconbox-icon">
                <span className="icon-magic-wand"></span>
              </div>
              <div className="iconbox-text">
                <h3 className="iconbox-title">Web дизайн</h3>
                <div className="iconbox-desc">
                  Вёрстка, редизайн, интеграция компонентов. Кастомизация. Это всё моё. Могу воплотить в жизнь любое программное решение. Невыполнимых задач не бывает. Любые ваши идеи обсудим и сделаем.
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-3">

            <div className="iconbox wow slideInRight">
              <div className="iconbox-icon">
                <span className="icon-badge"></span>
              </div>
              <div className="iconbox-text">
                <h3 className="iconbox-title">Сопровождение</h3>
                <div className="iconbox-desc">
                  Любой сайт требует бережного за ним ухода. Своевременного лечения. Иногда его надо вовремя быстро перенастроить под стремительно меняющийся рынок. Я всегда готов вам в этом помочь.
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-3">

            <div className="iconbox wow slideInRight">
              <div className="iconbox-icon">
                <span className="icon-question"></span>
              </div>
              <div className="iconbox-text">
                <h3 className="iconbox-title">Есть вопросы?</h3>
                <div className="iconbox-desc">
                  С удовольствием всем отвечу.<br />Пишите звоните:<br /><br /><div style={{textAlign:'left'}}>Skype: <b>myliveweb</b><br />Почта: <b>info@zapolskiy.moscow</b><br />Тел: <b>+7 962 206-4142</b><br /></div><br />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}