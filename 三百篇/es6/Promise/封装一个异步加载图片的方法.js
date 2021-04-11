function loadImg(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve();
    };
    img.onerror = function () {
      reject();
    };
    img.url = url;
  });
}
