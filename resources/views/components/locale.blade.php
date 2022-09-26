<form action="{{route('set_language_locale',$lang)}}" method="POST">
@csrf
    <button type="submit" id="btnGradient" class="nav-link text-center" style="background-color:transparent; border:none">
        <!-- <span class="fi fi-{{$nation}} fis"></span> -->
            {{$nation}}
    </button>
</form>