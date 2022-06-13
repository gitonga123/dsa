// processing the node after it leaves the stack.
// depth, process the height first before traversing on the width;

const depthFirstPrint = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const curr = stack.pop();

        console.log(curr);

        if (graph[curr]) {
            for (let n of graph[curr]) {
                stack.push(n);
            }
        }
    }
}

const depthFirstPrintRecursive = (graph, source) => {
    console.log(source);

    for (let n of graph[source]) {
        depthFirstPrintRecursive(graph, n);
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while(queue.length > 0) {
        const curr = queue.shift();
        console.log(curr);
        for (let n of graph[curr]) {
            queue.push(n);
        }
    }
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

breadthFirstPrint(graph, 'a');
// depthFirstPrint(graph, 'a');
// depthFirstPrintRecursive(graph, 'a');