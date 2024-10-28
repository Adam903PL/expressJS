// const express = require('express')
// const app = express()
// const cors = require('cors');
// const PORT = 5000

// app.use(cors());
// app.get('/api',(req,res)=>{
//     const datas = [{name:"inne",fileType:"folder"},{name:"pies",fileType:"folder"}]
//     res.json(datas)

//     // ne dpoint do /innr gdzie będzi ehtml w postacji tsx
// })

// app.listen(5000,() =>{console.log("Server started on port 5000")})

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());

// Endpoint API
app.get('/api', (req, res) => {
    const datas = [{ name: "inne", fileType: "folder" }, { name: "pies", fileType: "folder" }];
    res.json(datas);
});

// Zwracanie index.html dla wszystkich innych tras
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start serwera
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
