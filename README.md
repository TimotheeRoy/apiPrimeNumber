apiPrimeNumber is a RESTfull API that return JSON.

URL: https://api-prime-number.vercel.app/

Request : 
  GET /IsPrime?n=<number>

Parameter:
  <number>: any integer in [-999 999 999 999 999 ,999 999 999 999 999] (15 digits)

Exemple:
  https://api-prime-number.vercel.app/isPrime?n=97
    Response : { n: 97 , IsPrime : True}
    
  https://api-prime-number.vercel.app/isPrime?n=100
    Response : { n: 100 , IsPrime : False}


