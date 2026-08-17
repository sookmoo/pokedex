import * as readline from "readline";
import { getCommands } from "./commands.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
    interface: readline.Interface;
    commands: Record<string, CLICommand>
};

export function initState(): State {
    const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > "
        });

    return {
          interface: rl,
          commands: getCommands()
        };
};
