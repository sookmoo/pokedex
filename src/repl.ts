
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}

export function startREPL(state: State): void {
    
    const commands = state.commands;

    state.interface.prompt();

    try {
        state.interface.on('line', (input) => {

            const arr = cleanInput(input);

            if (arr[0] in commands) {
                const command = commands[arr[0]];
                command.callback(state);
                state.interface.prompt();
            } else {
                console.log("Unknown command")
                state.interface.prompt();
            }

        });

    } catch (error) {
        state.interface.close();
        console.log(error);
    }

}
