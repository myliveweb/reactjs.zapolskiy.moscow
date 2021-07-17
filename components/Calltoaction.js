import styled from 'styled-components'

const Calltoaction = () => {
  return (
	<section className="calltoaction" style={{position: 'relative'}}>
		<div className="container">

			<div className="row">

				<div className="col-md-12 col-lg-12">
					<h2 className="wow slideInRight" data-wow-delay=".1s">Готовы к сотрудничеству?</h2>
					<div className="calltoaction-decription wow slideInRight" data-wow-delay=".2s">
						Кратко опишите вашу задачу. В ближайшее время я свяжусь с вами.
					</div>
				</div>

				<div className="col-md-12 col-lg-12 calltoaction-btn wow slideInRight" data-wow-delay=".3s">
					<a href="#contact" className="btn btn-lg">Написать мне</a>
				</div>

			</div>
		</div>
	</section>
  )
}

export default Calltoaction
