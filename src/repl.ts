import * as readline from "readline";
import { CLICommand } from "./command.js"
import { getCommands } from "./commands.js"

export function cleanInput(input: string): string[] {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}

export function startREPL(): void {
    
    const commands = getCommands();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    rl.prompt();

    try {
        rl.on('line', (input) => {

            const arr = cleanInput(input);

            if (arr[0] in commands) {
                const command = commands[arr[0]];
                command.callback(commands);
                rl.prompt();
            } else {
                console.log("Unknown command")
                rl.prompt();
            }

        });

    } catch (error) {
        rl.close();
        console.log(error);
    }

}
