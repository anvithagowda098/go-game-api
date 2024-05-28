const express = require('express');
const app = express();
const port = 3000;

// Defining the endpoint
app.get('/:p1/:p2/:p3', (req, res) => {
  
    // Parsing the parameters from the URL
    const p1 = parseInt(req.params.p1);
    const p2 = parseInt(req.params.p2);
    const p3 = parseInt(req.params.p3);

    // Calculating total points
    const totalPoints = p1 + p2 + p3;

    // Validating the input
    if(totalPoints % 2 !=0) {
        return res.json({ max_draws: -1 });
    }
    if(p1===0 && p2 ===0 && p3 ===0 ) {
        return res.json({ max_draws: 0 });
    }
    if(p1+p2<=p3) {
        return res.json({ max_draws: p1+p2 });
    }
    else if(p1<= p2 && p2<=p3) {
        return res.json({ max_draws: totalPoints/2 });
  }

    // Responding with the maximum number of draws
    res.json({ max_draws: maxDraws });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
