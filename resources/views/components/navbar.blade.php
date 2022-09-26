<div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-center justify-content-md-between">

      <div class="contact-info d-flex align-items-center justify-content-between">
        <i class="bi bi-phone d-flex align-items-center"><span><a href="tel:+34 624681426">+34 624681426</a></span></i>
        <i class="bi bi-clock d-flex align-items-center ms-4"><span class=""> {{__('ui.open')}}: 18-00:30PM</span></i>
      </div>
      <div>
        <ul class="prova d-none d-md-flex justify-content-between mt-3">
          @if(session('locale')=='it')
          <li class="text-color"><x-locale lang="en" nation="English|"/></li>
          <li class="text-color"><x-locale lang="es" nation="Español" /></li>
          @elseif(session('locale')=='es')
          <li class="text-color"><x-locale lang="it" nation="Italiano|" /></li>
          <li class="text-color"><x-locale lang="en" nation="English"/></li>
          @else
          <li class="text-color"><x-locale lang="it" nation="Italiano|" /></li>
          <li class="text-color"><x-locale lang="es" nation="Español" /></li>


          @endif
        </ul>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">


      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="#hero">Home</a></li>
          <!-- <li><a class="nav-link scrollto" href="#about">{{__('ui.about')}}</a></li> -->
          <li><a class="nav-link scrollto" href="#specialty">{{__('ui.story')}}</a></li>
          <li><a class="nav-link scrollto" href="#menu">Menu</a></li>
          <li><a class="nav-link scrollto" href="#contact">{{__('ui.contact')}}</a></li>
          <hr>
          <div class="d-flex">
            <div class="mx-auto nav-link-lang d-lg-none">{{__('ui.lang')}}</div>
          </div>
          @if(session('locale')=='it')
          <li class="d-lg-none nav-link-form"><x-locale lang="en" nation="English"/></li>
          <li class="d-lg-none nav-link-form"><x-locale lang="es" nation="Español"/></li>
          @elseif(session('locale')=='es')
          <li class="d-lg-none nav-link-form"><x-locale lang="it" nation="Italiano"/></li>
          <li class="d-lg-none nav-link-form"><x-locale lang="en" nation="English"/></li>
          @else
          <li class="d-lg-none nav-link-form"><x-locale lang="it" nation="Italiano"/></li>
          <li class="d-lg-none nav-link-form"><x-locale lang="es" nation="Español"/></li>
          @endif



        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="https://wa.me/+34624681426?text=Tienes%20una%20mesa%20disponible?" class="book-a-table-btn scrollto d-none d-lg-flex">{{__('ui.book_a_table')}}</a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="zoom-in col-lg-8 d-flex flex-column justify-content-center">
          <h1 class="mx-auto">{{__('ui.welcome')}} </h1>
          <img src="/img/logo/logo.png" class="mx-auto" alt="logo" style="height: 300px">
          <h2 class="mx-auto history">{{__('ui.about-history')}}</h2>
          <div class="btns mx-auto">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto my-3 mb-md-0">{{__('ui.menu')}}</a>
            <a href="https://wa.me/+34624681426?text=Tienes%20una%20mesa%20disponible?" class="btn-book d-none d-lg-inline animated fadeInUp scrollto">{{__('ui.book_a_table')}}</a>
          </div>
        </div>

      </div>
    </div>
  </section><!-- End Hero -->