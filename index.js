const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const Port = 8000;

//  Routes
app.get("/users", (req,res) => {
    const html  = `
    <ul>
    ${users.map((user) => `<li>${user.job_title}</li>`)}
    </ul> `;
    res.send(html)
});

app.get("/api/users", (req,res) => {
    return res.json(users);
})

app.get("/api/users/:id", (req,res) => {
    const id  = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})


app.post("/create_user", (req,res)=> {
    // TODO: Create new User
    return res.json({status: 'pending'})
})




app.listen(Port,console.log("Server Runing.... "))