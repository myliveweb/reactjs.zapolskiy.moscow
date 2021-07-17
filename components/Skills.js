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
                                <div className="pfblock-line"></div>
                                <div className="pfblock-subtitle">
                                  <b>JavaScript</b> - ES6+, TypeScript, Node.js, React.js/Redux/Saga/Next, Vue.js/Vuex/Nuxt<br />
                                	<b>Все современные фреймворки и CMS</b> - перечислять нет смысла<br />
                                	<b>Полный Битрикс стек</b> - PHP, SQL, Bitrix API + всякие сертификаты их много<br />
                                	<b>Data mining (сбор и анализ данных, BigData)</b> - Go, Python, Rust<br />
                                	<b>Мобильная разработка</b> - Flutter (Android, iPhone)
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
						<h3 className="text-center">Дизайн</h3>
					</div>
					<div className="col-sm-6 col-md-3 text-center">
						<span data-percent="110" className="chart easyPieChart" style={{width: '140px', height: '140px', lineHeight: '140px'}}>
                            <span className="percent">110</span>
                        </span>
						<h3 className="text-center">Продвижение</h3>
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
