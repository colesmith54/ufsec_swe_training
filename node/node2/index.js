const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(
            path.join(__dirname, "files", "starter.txt"),
            "utf-8"
        );

        console.log("original:", data);

        await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

        await fsPromises.writeFile(
            path.join(__dirname, "files", "promiseWrite.txt"),
            data
        );

        await fsPromises.appendFile(
            path.join(__dirname, "files", "promiseWrite.txt"),
            "\nNice to meet you!"
        );

        await fsPromises.rename(
            path.join(__dirname, "files", "promiseWrite.txt"),
            path.join(__dirname, "files", "promiseComplete.txt"),
            "\nNice to meet you!"
        );

        const newData = await fsPromises.readFile(
            path.join(__dirname, "files", "promiseComplete.txt"),
            "utf-8"
        );

        console.log("new:", newData);
    } catch (err) {
        console.log(err);
    }
};

fileOps();

// fs.readFile(
//     path.join(__dirname, "files", "starter.txt"),
//     "utf-8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data.toString());
//     }
// );

// does not look good, oopsie woopsie
// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Hello!", (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//         path.join(__dirname, "files", "reply.txt"),
//         "Testing append... ",
//         (err) => {
//             if (err) throw err;
//             console.log("Append complete");

//             fs.rename(
//                 path.join(__dirname, "files", "reply.txt"),
//                 path.join(__dirname, "files", "newReply.txt"),
//                 (err) => {
//                     if (err) throw err;
//                     console.log("Rename complete");
//                 }
//             );
//         }
//     );
// });

process.on("uncaughtException", (err) => {
    console.log(err.name, err.message);
    process.exit(1);
});
