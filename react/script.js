const fs = require("fs");
const { exec } = require("child_process");
const util = require("util");

const execAsync = util.promisify(exec);

// run inside a react subfolder
async function main() {
    try {
        process.chdir("..");

        await execAsync("git add .");
        const latestReactFolder = getLatestReactFolder();
        await execAsync(`git commit -am 'finish lesson ${latestReactFolder}'`);
        await execAsync("git push");

        const newReactFolder = `react${
            parseInt(latestReactFolder.replace("react", "")) + 1
        }`;
        fs.cpSync(`./${latestReactFolder}`, `./${newReactFolder}`, {
            recursive: true,
        });

        updatePackageJsonNames(`./${newReactFolder}`, newReactFolder);

        process.chdir(`./${newReactFolder}`);

        if (fs.existsSync("./node_modules")) {
            fs.rmSync("./node_modules", { recursive: true });
        }

        await execAsync("npm install");
        await execAsync("npm upgrade");
        await execAsync("npm start");

        console.log("Script completed successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

function getLatestReactFolder() {
    const directories = fs
        .readdirSync("../")
        .filter((file) => fs.statSync(`../${file}`).isDirectory());
    const reactDirectories = directories.filter((dir) =>
        dir.startsWith("react")
    );
    return reactDirectories.sort().pop();
}

function updatePackageJsonNames(directory, newName) {
    ["package.json", "package-lock.json"].forEach((fileName) => {
        const filePath = `${directory}/${fileName}`;
        if (fs.existsSync(filePath)) {
            let fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));
            fileContent.name = newName;
            fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
        }
    });
}

main();
