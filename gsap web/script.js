function section1(params) {
    


var tl=gsap.timeline();

tl.from("nav h1,nav h4,nav button",{
    scale:0,
    y:-30,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
})

tl.from(".center-part1 h1",{
    // scale:0,
    x:-200,
    opacity:0,
    
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
})
tl.from(".center-part1 p",{
    // scale:0,
    x:-100,
    opacity:0,
    
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
})


tl.from(".center-part1 button",{
    scale:0,
    // x:-100,
    opacity:0,
    
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
})

tl.from(".center-part2 img",{
    // scale:0,
    x:100,
    opacity:0,
    
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
},"-=1")


tl.from(".section1bottom img",{
    scale:0,
    x:30,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2,
    scrollTrigger:{
        trigger:".section1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        // end:"top 0",
        scrub:1
    }
})


};

section1();


function section2(params) {
    


var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100",
        scrub:1
    }
});

tl2.from(".services h3",{
    // scale:0,
    x:-100,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
})
tl2.from(".services p",{
    // scale:0,
    x:200,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
})


tl2.from(".elem.line1.left",{
    // scale:0,
    x:-300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
},"anim1")


tl2.from(".elem.line1.right",{
    // scale:0,
    x:300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
},"anim1")


tl2.from(".elem.line2.left",{
    // scale:0,
    x:-300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
},"anim2")


tl2.from(".elem.line2.right",{
    // scale:0,
    x:300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:1
},"anim2")


//other line

tl2.from(".elem.line3.left",{
    // scale:0,
    x:-300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
},"anim3")


tl2.from(".elem.line3.right",{
    // scale:0,
    x:300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
},"anim3")


tl2.from(".elem.line4.left",{
    // scale:0,
    x:-300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
},"anim4")


tl2.from(".elem.line4.right",{
    // scale:0,
    x:300,
    opacity:0,
    duration:1,
    ease:Power2.easeInOut,
    stagger:0.2
},"anim4")

};

section2();
