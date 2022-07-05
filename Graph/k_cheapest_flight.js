// 787. Cheapest Flights Within K Stops
/**
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei]
 * indicates that there is a flight from city fromi to city toi with cost pricei.
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops.
 * If there is no such route, return -1.
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
    let totalPrice = Number.MAX_VALUE;

    const graph = {};

    flights.forEach((flight) => {
        const [flightSrc, flightDest, flightPrice] = flight;
        if (!graph[flightSrc]) {
            graph[flightSrc] = {};
        }

        graph[flightSrc][flightDest] = flightPrice;
    });

    let sourceCity, destinations, price, updatedPrice, stops, nextStops;

    const stack = [[graph[src], 0, 0]];
    const visited = {};

    while (stack.length) {
        sourceCity = stack.shift();
        [destinations, price, stops] = sourceCity;
        console.log(destinations);

        if (stops > k) continue;

        nextStops = stops + 1;

        if (destinations) {
            Object.keys(destinations).forEach((city) => {
                updatedPrice = price + destinations[city];

                if (parseInt(city) === parseInt(dst) && updatedPrice < totalPrice) {
                    totalPrice = updatedPrice;
                }

                if (visited[city] < updatedPrice) return;

                visited[city] = updatedPrice;
                stack.push([graph[city], updatedPrice, nextStops]);
            });
        }
    }
    return totalPrice === Number.MAX_VALUE ? -1 : totalPrice;
};

console.log(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)); //700