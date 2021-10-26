require("dotenv").config();
import express, { request, response } from "express";

import app from "./app";

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is runing in port ${port}`));
