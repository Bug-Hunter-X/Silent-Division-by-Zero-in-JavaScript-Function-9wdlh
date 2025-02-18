# Silent Division by Zero in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript: silently handling division by zero instead of throwing an error.  The function `myFunction` should ideally throw an error when dividing by zero to prevent unexpected behavior or results. This example highlights the importance of explicit error handling in JavaScript.

## Bug
The `bug.js` file contains a JavaScript function that fails to properly handle division by zero. Instead of throwing an error, it returns 0, which can be misleading. 

## Solution
The `bugSolution.js` file provides a corrected version of the function, which now correctly throws an error when division by zero occurs, making the error more easily identified and handled.