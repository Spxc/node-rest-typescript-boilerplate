import express from "express";
import path from "path";
import fs from "fs";
import { appConfig } from "@config";

const app = express() 

const routePath = path.join(__dirname, 'routes/v1');

// Dynamically loads routes
fs.readdirSync(routePath).forEach(async (filename) => {
    try {
        const { router } = await import(`./routes/v1/${filename}/routes`);
        app.use(`/api/v1/${filename}`, router);
    } catch (error: unknown) {
        console.log(error);
    }
});

app.listen(appConfig.PORT, () => {
    console.log(`Server running at http://localhost:${appConfig.PORT}`);
});
