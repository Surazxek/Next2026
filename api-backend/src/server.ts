import http from "http";
import app from "./app";

const server = http.createServer(app);

const PORT = 9009;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press ctrl + c to disconnect ");
});

server.on("error", (err) => {
  console.log(err);
  console.log("Server Error", err.message);
  process.exit(1);
});

//sdRb1b7Unzfj6ND6
//sdRb1b7Unzfj6ND6
