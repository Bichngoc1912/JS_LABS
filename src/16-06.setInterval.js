function countdown(seconds) {
  let currSecond = seconds;

  const intervalId = setInterval(() => {
    console.log(currSecond);

    if (currSecond <= 0) {
      clearInterval(intervalId);
    }

    currSecond -= 1;
  }, 1000);
}