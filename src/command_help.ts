import { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    for (const key in commands) {
        console.log(`${key}: ${commands[key]["description"]}`);
    }
}