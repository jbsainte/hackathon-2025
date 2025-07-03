import * as vscode from 'vscode';
import { checkNamingConventions } from './utils/naming';

// Cette fonction est appelée à l'activation de ton extension
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "awesome-dev" is now active!');

    // Enregistre la commande, le nom doit correspondre à celui du package.json
    const disposable = vscode.commands.registerCommand('awesome-dev.Dave', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText();
            const issues = checkNamingConventions(text);
            vscode.window.showInformationMessage(`${issues.length} naming issues found`);
        } else {
            vscode.window.showInformationMessage('No active editor found');
        }
    });

    context.subscriptions.push(disposable);
}

// Cette fonction est appelée à la désactivation de l'extension
export function deactivate() {}
