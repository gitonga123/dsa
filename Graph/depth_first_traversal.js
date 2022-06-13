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

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph, 'a');