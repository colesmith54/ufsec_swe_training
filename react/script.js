const fs = require("fs");
const { exec } = require("child_process");
const util = require("util");

const execAsync = util.promisify(exec);

async function main() {
    try {
        // Save the current directory (latest React subdir)
        const currentDir = process.cwd();

        // Git add, commit, and push
        await execAsync("git add .");
        const latestReactFolder = currentDir.split("/").pop();
        await execAsync(`git commit -am 'finish lesson ${latestReactFolder}'`);
        await execAsync("git push");

        // Move up one directory
        process.chdir("..");

        // Copy directory and increment n
        const newReactFolder = `react${
            parseInt(latestReactFolder.replace("react", "")) + 1
        }`;
        fs.cpSync(`./${latestReactFolder}`, `./${newReactFolder}`, {
            recursive: true,
        });

        // Update package.json and package-lock.json
        updatePackageJsonNames(`./${newReactFolder}`, newReactFolder);

        // Change to new directory and perform npm tasks
        process.chdir(`./${newReactFolder}`);
        if (fs.existsSync("./node_modules")) {
            fs.rmSync("./node_modules", { recursive: true });
        }
        await execAsync("npm install");
        await execAsync("npm upgrade");

        console.log("Script completed successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
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
