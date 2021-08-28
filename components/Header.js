import TopMenu from './Menu';

export default function Header() {
  return (
	<header className="header">
		<nav className="navbar navbar-custom" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
						<span className="sr-only">Дополнительная навигация</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" style={{fontFamily: 'Raleway400, sans-serif'}} href="/">Сергей Запольский</a>
				</div>
				<div className="collapse navbar-collapse" id="custom-collapse">
          <TopMenu />
				</div>
			</div>
		</nav>
	</header>
  )
}