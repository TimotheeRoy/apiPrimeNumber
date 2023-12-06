const express = require('express')
const app = express()
const port = 3000;


const isNumberPrime = (n) =>{
    n = Math.abs(n);
    if (n < 2)
        return false
    for (let i = 2 ; i <= Math.sqrt(n) ; i++){
        if (n%i === 0)
            return false
    }
    return true
}

app.get('/isPrime', (req, res) => {
    const n = parseInt(req.query.n)
    res.header('Content-Type', 'application/json')
    res.json({
        n, 
        isPrime: isNumberPrime(n) 
    })
})


export default app;