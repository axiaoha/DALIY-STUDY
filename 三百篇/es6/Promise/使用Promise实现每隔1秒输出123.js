let arr = [1, 2, 3];
arr.reduce((p, item) => {
  return p.then((r) => {
    return new Promise((r) => {
      setTimeout(() => {
        console.log(item);
        r();
      }, 1000);
    });
  });
}, Promise.resolve());
