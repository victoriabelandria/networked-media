window.onload = () => {
  const images = [
    "imgs/angelica-1.png",
    "imgs/angelica-2.png",
    "imgs/angelica-3.png",
    "imgs/angelica-6.png",
    "imgs/angelica-7.png",
  ];

  for (let item of images) {
    let newImage = document.createElement("img");
    let rotation = Math.round(Math.random() * 20 - 10);
    newImage.src = item;
    newImage.classList.add("draggable");
    newImage.width = 300;

    newImage.style.transform = "rotate(" + rotation + "deg)";
    newImage.style.position = "absolute";
    newImage.style.top = Math.random() * 50 + "vh";
    newImage.style.left = Math.random() * 80 + "vw";
    newImage.rotation = rotation;
    newImage.dragX = 0; //from library doc
    newImage.dragY = 0; //from library doc
    document.querySelector(".all-posts").appendChild(newImage);
  }

  // posts that came from the server
  let existingPosts = document.getElementsByClassName("post draggable");
  for (let post of existingPosts) {
    let rotation = Math.round(Math.random() * 20 - 10);
    post.style.transform = "rotate(" + rotation + "deg)";
    post.rotation = rotation;
    post.dragX = 0;
    post.dragY = 0;
    post.style.position = "absolute";
    post.style.top = Math.random() * 50 + "vh";
    post.style.left = Math.random() * 80 + "vw";
  }

  // code: https://interactjs.io/docs/draggable
  interact(".draggable").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        event.target.dragX = event.target.dragX + event.dx;
        event.target.dragY = event.target.dragY + event.dy;

        event.target.style.transform =
          "translate(" +
          event.target.dragX +
          "px, " +
          event.target.dragY +
          "px)" +
          " rotate(" +
          event.target.rotation +
          "deg)";
      },
    },
  });
};
