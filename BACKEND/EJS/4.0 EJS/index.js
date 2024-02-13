import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    const date = new Date();
    let day = date.getDay();
    console.log(day);

    let dayType = "a weekday";
    let advice = "its time to work hard";

    if (day === 0 || day === 6) {
        dayType = "a weekend";
        advice = "Its time to have fun!"
    }
    
    res.render("index.ejs", {
        dayType : "a weekday",
        advice : "its time to work hard"
    })
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});