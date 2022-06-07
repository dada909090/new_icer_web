const screen_hight = $(window).height();
$("#header").height(screen_hight);

let display = 0;
for (let i = 0; i < 1000; i += 10) {
    setTimeout(() => {
        $("body").attr("style", `background-image: linear-gradient(90deg, rgba(99, 237, 255, 1) 0%, rgba(46, 144, 243, 1) ${display*100}%, rgba(99, 237, 255, 1) 110%);`);
        display += 0.01;
    },i);
}