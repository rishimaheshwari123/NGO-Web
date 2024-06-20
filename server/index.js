const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload")

// env configration 
dotenv.config();

// rest object  
const app = express();


// connect to db 
connectDB();
// middleware 
app.use(express.json())
app.use(cors());


app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);
cloudinaryConnect();

// routes 

app.use("/api/v1/admin", require("./routes/authRoute"))
app.use("/api/v1/events", require("./routes/eventRoute"))
app.use("/api/v1/employee", require("./routes/empolyeeRoute"))
app.use("/api/v1/onlinePayment", require("./routes/onlinePaymentRoute"))
app.use("/api/v1/casePayment", require("./routes/casePaymentRoute"))
app.use("/api/v1/blood", require("./routes/BloodDonation"))
app.use("/api/v1/eventList", require("./routes/eventListRoute"))
app.use("/api/v1/culture", require("./routes/clutureRoute"))
app.use("/api/v1/expense", require("./routes/ExpenseRoute"))
app.use("/api/v1/member", require("./routes/monthlyMember"))
app.use("/api/v1/category", require("./routes/categoryRoute"))


app.use("/", (req, res) => {
    res.send("Ha bhai chal rha hu. Uski tarha tere ko chod kar thodi jaunga 😀")
})
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})
