var brain = require("brain"),
    net   = new brain.NeuralNetwork();

// Second Test
// Train a NN to return a linear computation

var testData = [], x, y;


for(var i = 0; i < 10000000; i++) {
  x = Math.floor(Math.random() / 2 );
  y = Math.floor(Math.random() / 2 );
  testData.push({input: [x, y], output: [x + y]});
}

net.train(testData, {
  errorThresh: 0.005,  // error threshold to reach
  iterations: 20000,   // maximum training iterations
  log: true,           // console.log() progress periodically
  logPeriod: 10,       // number of iterations between logging
  learningRate: 0.3    // learning rate
});

var output = net.run([.2, .3]);

console.log(output);
