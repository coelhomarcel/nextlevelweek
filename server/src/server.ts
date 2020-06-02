import express from 'express';

const app =  express();

app.get('/users', () => {
    console.log('ok');
});

app.listen(3000);