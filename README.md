#Neural

Experiments with a Neural Network


### TEST 1 -- Return a Static Value

The test is to return 1, when supplied a value 0.

Iterations             Output
10           [ 0.9313528054137278 ]
100          [ 0.9411934436225785 ]
1,000        [ 0.9798744744998159 ]
10,000       [ 0.991437540920101 ]
100,000      [ 0.9974856605113298 ]
1,000,000    [ 0.9992585865666932 ]
5,000,000    [ 0.9996678950346121 ]
10,000,000   [ 0.9997745869334989 ]
25,000,000   FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory

### TEST 2 -- Return a linear computation

Iterations            Output
10           [ 0.06987202916794236 ]
100

### Notes

The error changes every time the same data is processed. Did not expect that!
The test is very inaccurate because the error and out output change everytime. Should write a script execute
app.js x number of times.
