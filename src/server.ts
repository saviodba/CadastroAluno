import { app } from "./app";

const port = process.env.PORT || 3000

app.listen(port, async () => {
    console.log(`API rodando, porta : ${port}`);
})

