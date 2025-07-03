import * as vscode from 'vscode';

// A simple naming convention checker function example
export function checkNamingConventions(text: string): string[] {
    const issues: string[] = [];

    // Let's say you want to find all variable declarations that don't use camelCase
    // This is a very simple RegExp example, you can make it more sophisticated with a parser like TypeScript compiler API
    const varRegex = /const\s+([a-zA-Z0-9_]+)\s*=/g;
    let match;
    while ((match = varRegex.exec(text)) !== null) {
        const varName = match[1];
        if (!/^([a-z][a-zA-Z0-9]*)$/.test(varName)) {
            issues.push(`Variable name "${varName}" does not follow camelCase.`);
        }
    }

    return issues;
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "awesome-dev" is now active!');

    const disposable = vscode.commands.registerCommand('awesome-dev.checkNaming', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText();
            const issues = checkNamingConventions(text);
            if (issues.length === 0) {
                vscode.window.showInformationMessage('No naming issues found!');
            } else {
                vscode.window.showInformationMessage(`${issues.length} naming issues found:\n${issues.join('\n')}`);
            }
        } else {
            vscode.window.showInformationMessage('No active editor found.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
