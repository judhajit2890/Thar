//============scroll reveal======///
ScrollReveal().reveal('.logo1',{ delay: 700, easing: 'ease-in',distance: '60px',origin: 'left'});
ScrollReveal().reveal('.logo2',{ delay: 700, easing: 'ease-in',distance: '60px',origin: 'right'});
ScrollReveal().reveal('.spimage',{ delay: 500, easing: 'ease-in',distance: '60px',origin: 'left'});
ScrollReveal().reveal('.dtext',{ delay: 700, easing: 'ease-in',distance: '60px',origin: 'right'});


//=======popup========//
var popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

//==========navigation==========//
$(".menubar").click(function(){
    $("#navbar").slideToggle();
});

//===active scroll navigation======//
var section = document.querySelectorAll('section');
var navbar = document.querySelectorAll ('section nav a');


window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset = sec.offsetTop -100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');


        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']').classList.add
                ('active');
            });
        };
    });
};

//============owl carousel============//
$('.one').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    animationIn:'fadeIn',
    animationOut:'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.two').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    animationIn:'fadeIn',
    animationOut:'fadeOut',
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

//======from validation=============//
function validation(){
    var use = document.getElementById("user").value;
    var em = document.getElementById("email").value;

    if (use ==""){
        document.getElementById("uname").innerHTML="user name required";
        return false;
    }
    if (em ==""){
        document.getElementById("mail").innerHTML="email required";
        return false;
    }
    else{
        document.write("<h5>Thankyou</h5>")
    }
}


//-----------materialize carousel------------------//
// $(document).ready(function(){
//  $('.carousel').carousel({
//     indicators:false});
// });