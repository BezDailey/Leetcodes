function enoughTime(time, givenTime, totalTrips) {
    trips = 0;
    time.foreach((busTripTime) => {
        trips += Math.floor(busTripTime / givenTime);
    });
    return trips >= totalTrips;
}
function solution(time, totalTrips) {
    left = 1;
    time.foreach((busTime) => {
        right = Math.max(right, busTime * totalTrips);
    });
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (enoughTime(time, mid, totalTrips)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
}

console.log(solution([1, 2, 3], 5));
