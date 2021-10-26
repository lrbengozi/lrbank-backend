require("dotenv").config();
import "reflect-metadata";

import app from "./app";

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is runing in port ${port}`));
