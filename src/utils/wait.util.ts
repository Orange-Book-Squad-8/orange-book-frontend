export async function wait(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
}
