var brain = require("brain"),
    net   = new brain.NeuralNetwork();

// First Test
// Train a NN to return a static value

var testData = [];

for(var i = 0; i < 25000000; i++) {
  testData.push({input: [0], output: [1]});
}

net.train(testData, {
  errorThresh: 0.005,  // error threshold to reach
  iterations: 20000,   // maximum training iterations
  log: true,           // console.log() progress periodically
  logPeriod: 10,       // number of iterations between logging
  learningRate: 0.3    // learning rate
});

var output = net.run([0]);

console.log(output);
