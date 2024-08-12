function findParent(processNumber) {
    // Initialize variables
    let currentProcess = 1;
    let currentNode = 1;
    
    // Loop to find the current process's position
    while (currentNode + currentProcess <= processNumber) {
        currentNode += currentProcess;
        currentProcess++;
    }
    
    // The parent process will be the process number which is spawning
    return currentProcess;
}

// Example usage:
let processNumber = 499501;
console.log(`The parent of process ${processNumber} is: ${findParent(processNumber)}`);
