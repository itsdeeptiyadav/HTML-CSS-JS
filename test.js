function countItemsInCache(data, queries) {
    // Calculate expiry times for each data point
    let expiryTimes = data.map(item => ({
        start: item[0],
        end: item[0] + item[1]
    }));
    
    // Array to store the results of each query
    let results = [];

    // Process each query to count the items in cache
    for (let query of queries) {
        let count = 0;

        for (let i = 0; i < expiryTimes.length; i++) {
            if (query >= expiryTimes[i].start && query <= expiryTimes[i].end) {
                count++;
            }
        }

        results.push(count);
    }

    return results;
}

// Example usage:
let data = [
    [105231, 183],  // Inserted at time 105231, TTL of 183
    [105334, 34],   // Inserted at time 105334, TTL of 34
    [105198, 543]   // Inserted at time 105198, TTL of 543
];

let queries = [105338, 105410]; // Times to query the cache

let result = countItemsInCache(data, queries);

console.log(result); // Output the number of items in the cache for each query time
