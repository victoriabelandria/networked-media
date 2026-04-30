window.onload = () => {
  for (let item of images) {
    let newImage = document.createElement("img");
    let rotation = Math.round(Math.random() * 20 - 10);
    newImage.src = item;
    newImage.classList.add("draggable");
    newImage.width = 150;

    newImage.style.transform = "rotate(" + rotation + "deg)";
    newImage.style.position = "absolute";
    newImage.style.top = Math.random() * 60 + "%";
    newImage.style.left = Math.random() * 80 + "%";
    newImage.rotation = rotation;
    newImage.dragX = 0; //from library doc
    newImage.dragY = 0; //from library doc
    document.querySelector(".all-posts").appendChild(newImage);
  }

  // posts that came from the server
  let existingPosts = document.getElementsByClassName("post draggable");
  for (let post of existingPosts) {
    let rotation;
    if (post.querySelector("p")) {
      rotation = Math.round(Math.random() * 4 - 2);
    } else {
      rotation = Math.round(Math.random() * 20 - 10);
    }
    post.style.transform = "rotate(" + rotation + "deg)";
    post.rotation = rotation;
    post.dragX = 0;
    post.dragY = 0;
    post.style.position = "absolute";
    post.style.top = Math.random() * 60 + "%";
    post.style.left = Math.random() * 60 + "%";
  }

  let songGif = document.getElementById("song-gif");
  let song = document.getElementById("song");

  if (songGif) {
    songGif.onclick = function () {
      song.play();
    };
  }

  let plusBtn = document.getElementById("plus-btn");
  let uploadBox = document.getElementById("upload-box");
  let penBtn = document.getElementById("pen-btn");
  let textBox = document.getElementById("text-box");

  if (plusBtn) {
    plusBtn.onclick = function () {
      if (uploadBox.style.display == "block") {
        uploadBox.style.display = "none";
      } else {
        textBox.style.display = "none";
        uploadBox.style.display = "block";
      }
    };

    penBtn.onclick = function () {
      if (textBox.style.display == "block") {
        textBox.style.display = "none";
      } else {
        uploadBox.style.display = "none";
        textBox.style.display = "block";
      }
    };

    document.onclick = function (click) {
      if (
        !uploadBox.contains(click.target) &&
        !plusBtn.contains(click.target)
      ) {
        uploadBox.style.display = "none";
      }
      if (!textBox.contains(click.target) && !penBtn.contains(click.target)) {
        textBox.style.display = "none";
      }
    };
  }

  // code: https://interactjs.io/docs/draggable
  interact(".draggable").draggable({
    listeners: {
      start() {
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
