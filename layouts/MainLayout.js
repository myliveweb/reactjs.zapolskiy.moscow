import Head from 'next/head'

import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'

export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Cache-control" content="public" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="разработка сайтов, дизайн сайтов, создание сайтов, сайт под ключ" />
        <meta name="description" content="Частный вебмастер Сергей Запольский - Разработка сайтов" />
        <meta name="author" content="Запольский Сергей" />
        <meta name="yandex-verification" content="d9a2d2ac1d28be6b" />
	      <link rel="icon" href="/assets/images/favicon/favicon.ico" />
	      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon-180x180.png" />
        <title>{title}</title>
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen"></link>
        <link href="assets/css/font-awesome.min.css" rel="stylesheet" media="screen"></link>
        <link href="assets/css/simple-line-icons.min.css" rel="stylesheet" media="screen"></link>
        <link href="assets/css/animate.min.css" rel="stylesheet"></link>
        <link href="assets/css/style.css" rel="stylesheet" media="screen"></link>
        <script async src="/assets/js/modernizr.custom.min.js"></script>
      </Head>
      <div id="preloader">
		    <div id="status"></div>
	    </div>
      { children }
      <Footer />
      <ScrollUp />
	<script src="assets/js/jquery-1.11.1.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.parallax-1.1.3.min.js"></script>
	<script src="assets/js/imagesloaded.pkgd.min.js"></script>
	<script src="assets/js/jquery.sticky.min.js"></script>
	<script src="assets/js/smoothscroll.min.js"></script>
	<script src="assets/js/wow.min.js"></script>
  <script src="assets/js/jquery.easypiechart.min.js"></script>
  <script src="assets/js/waypoints.min.js"></script>
  <script src="assets/js/jquery.cbpQTRotator.min.js"></script>
	<script src="assets/js/custom.js"></script>
    </>
  )
}