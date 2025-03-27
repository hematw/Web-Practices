const express = require("express");
const cluster = require("cluster");


const app = express();

app.use(express.json());

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

function block() {
  const start = Date.now();
  while (Date.now() - start < 10000) {
    // This loop keeps running for 10 seconds
  }
}

app.get("/", async (req, res) => {
  res.send("home page");
});

app.get("/about", async (req, res) => {
  // await delay()
  block()
  res.send("about page");
});

app.post("/", (req, res) => {
  let { name } = req.query;
  if (!name) {
    name = req.body.name;
  }

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  res.send({ name: `Hello ${name}` });
});

// console.log("this line will execute for master and workers", process.pid);
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);
//   cluster.fork(); 
//   // cluster.fork(); 
// } else {
//   console.log(`Worker ${process.pid} is running`);  
//   app.listen(3000);
// }

module.exports = app;
