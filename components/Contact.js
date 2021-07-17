import styled from 'styled-components'

const Contact = () => {
  return (
	<section id="contact" className="pfblock" style={{background: '#ffffff'}}>
		<div className="container">
			<div className="row">

				<div className="col-sm-6 col-sm-offset-3">

					<div className="pfblock-header">
						<h2 className="pfblock-title">Пишите</h2>
						<div className="pfblock-line"></div>
						<div className="pfblock-subtitle">
							Кратко опишите вашу задачу. Я обязательно свяжусь с вами.
						</div>
					</div>

				</div>

			</div>

			<div className="row">

				<div className="col-sm-6 col-sm-offset-3">

					<form id="contact-form" role="form">
						<input type="hidden" id="c_template_id" name="c_template_id" value="0" />
						<input type="hidden" id="c_template_url" name="c_template_url" value="" />
						<div className="ajax-hidden">
							<div className="form-group wow fadeInUp">
								<label className="sr-only" for="c_name">Имя</label>
								<input type="text" id="c_name" className="form-control" name="c_name" placeholder="Имя" />
							</div>

							<div className="form-group wow fadeInUp" data-wow-delay=".1s">
								<label className="sr-only" for="c_email">Email</label>
								<input type="email" id="c_email" className="form-control" name="c_email" placeholder="E-mail" />
							</div>

							<div className="form-group wow fadeInUp" data-wow-delay=".2s">
								<textarea className="form-control" id="c_message" name="c_message" rows="7" placeholder="Ваше сообщение"></textarea>
							</div>

							<button type="submit" className="btn btn-lg btn-block wow fadeInUp" data-wow-delay=".3s">Отправить сообщение</button>
						</div>
						<div className="ajax-response" style={{marginTop: '15px'}}></div>
					</form>

				</div>

			</div>
		</div>
	</section>
  )
}

export default Contact
