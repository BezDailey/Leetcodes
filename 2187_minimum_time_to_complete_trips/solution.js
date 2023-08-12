function solution(time, totalTrips) {
  let minimumTime = 9999999;
  time.forEach(busTime => {
     minimumTime = Math.min(busTime * totalTrips, minimumTime);
  });
  return minimumTime;
}

console.log(solution([1,2,3],5));
