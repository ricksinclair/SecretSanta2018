var playPauseAnim = anime({
  targets: "div.interest",
  translateY: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
  rotate: {
    value: "2turn",
    easing: "easeInOutSine"
  },
  loop: true,

  delay: (el, i, l) => {
    return i * 1000;
  }
});

var colors = anime({
  targets: "h1",
  translateX: 250,
  color: [{ value: "rgb(255, 0, 0)" }, { value: "hsl(100, 60%, 60%)" }],
  easing: "linear",
  direction: "alternate",
  duration: 2000,
  loop: true
});

$(".play").on("click", () => {
  playPauseAnim.play();
  colors.play();
}); //  Manually play
$(".pause").on("click", () => {
  playPauseAnim.pause();
  colors.pause();
}); //  Manually pause
