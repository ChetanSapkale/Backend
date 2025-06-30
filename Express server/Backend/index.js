const express = require("express");
const fs = require("fs");
let cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/product", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
    
})

app.post("/addProduct", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            res.send(err);
        } else {
            const products = req.body;
            const newData = JSON.parse(data);
            newData.products.push(products);
            fs.writeFile("./db.json", JSON.stringify(newData), (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(newData);
                }
            })
        }
    })
    
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//http://localhost:3000