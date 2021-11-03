import styled from 'styled-components'

const Skills = () => {
  return (
    <section className="pfblock pfblock-gray" id="skills">

			<div className="container">

				<div className="row skills">

					<div className="row">

                        <div className="col-sm-6 col-sm-offset-3" style={{width: '80%', marginLeft: '10%'}}>

                            <div className="pfblock-header wow fadeInUp">
                                <h2 className="pfblock-title">Навыки</h2>
                                <div className="img-section"><img src="assets/images/tools/skils.png" alt="Навыки" title="Навыки" /></div>
                                <div className="pfblock-subtitle">
                                  <b>JavaScript</b> - ES6+, TypeScript, Angular, React.js/Redux/Saga/Next, Vue.js/Vuex/Nuxt<br />
                                  <b>Мобильная разработка</b> - React Native, Flutter (Android, iPhone)<br />
                                  <b>Back-end</b> - Node.js, PHP, Python, RESTfull/GraphQL, БД MySQL/PostgreSQL/MongoDB
                                </div>
                            </div>

                        </div>

                    </div>

					<div className="col-sm-6 col-md-3 text-center">
						<span data-percent="200" className="chart easyPieChart" style={{width: '140px', height: '140px', lineHeight: '140px'}}>
                            <span className="percent">100500</span>
                        </span>
						<h3 className="text-center">Программирование</h3>
					</div>
					<div className="col-sm-6 col-md-3 text-center">
						<span data-percent="200" className="chart easyPieChart" style={{width: '140px', height: '140px', lineHeight: '140px'}}>
                            <span className="percent">200</span>
                        </span>
						<h3 className="text-center">React</h3>
					</div>
					<div className="col-sm-6 col-md-3 text-center">
						<span data-percent="250" className="chart easyPieChart" style={{width: '140px', height: '140px', lineHeight: '140px'}}>
                            <span className="percent">250</span>
                        </span>
						<h3 className="text-center">Back-end</h3>
					</div>
					<div className="col-sm-6 col-md-3 text-center">
						<span data-percent="150" className="chart easyPieChart" style={{width: '140px', height: '140px', lineHeight: '140px'}}>
                            <span className="percent">150</span>
                        </span>
						<h3 className="text-center">UI / UX</h3>
					</div>

				</div>

			</div>

    </section>
  )
}

export default Skills
