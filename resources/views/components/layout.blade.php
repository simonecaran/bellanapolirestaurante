<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="8I-7bBBq5Yu9KMlRO130ee6cS34eb11F6ggJd3mlwVU" />
    <title>Trattoria BellaNapoli</title>
    <!-- Favicon -->
    <link rel="icon" href="{{url('./img/logo/logo.png')}}">
    <!-- BoostrapIcon CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <!-- Animate CSS-->
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <!-- Swiper CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
    />
    <!-- Fontawesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- BoxIcon -->
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <!-- AOS -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <!-- Custom CSS -->
    @vite('resources/css/app.css')
  </head>
  <body>
    <x-navbar/>
    <x-specialty />
    <x-menu />
    <x-contact />
    <x-footer />
    <div>
        {{$slot}}
    </div>
    <!-- Bootstrap JS -->
    @if(session('locale')=='it')
      @vite('resources/js/appIT.js')
    @elseif(session('locale')=='es')
        @vite('resources/js/appES.js')
    @else
      @vite('resources/js/appEN.js')
    @endif
    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- Cookie -->
    <script type="text/javascript">
      var _iub = _iub || [];
      _iub.csConfiguration = {"consentOnContinuedBrowsing":false,"countryDetection":true,"floatingPreferencesButtonDisplay":"bottom-right","gdprAppliesGlobally":false,"invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2799227,"cookiePolicyId":68242839,"lang":"it", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#0073CE","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","brandBackgroundColor":"#FFFFFF","brandTextColor":"#000000","closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#DADADA","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"logo":null,"rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#0073CE","rejectButtonDisplay":true,"textColor":"#000000" }};
    </script>
    <script>
      AOS.init({
        once:true
      });
    </script>
    
    <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
  </body>
</html>