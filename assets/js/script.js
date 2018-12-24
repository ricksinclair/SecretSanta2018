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

$(".play").on("click", () => {
  playPauseAnim.play();
}); //  Manually play
$(".pause").on("click", () => {
  playPauseAnim.pause();
}); //  Manually pause
