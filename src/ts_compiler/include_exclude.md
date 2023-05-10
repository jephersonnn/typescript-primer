# Excluding and Including Files

After `tsc --init`, you may exclude and include files and directories for compilation.
You may have to go `tsconfig.json` and add a key `"exclude"` and with its value as an array.
For example (on `tsconfig.json`):
```json

`{
    compilerOptions: [
        ...
    ],
    exclude: [
        "app.ts", "menu.ts", "views"
    ],
    include: [
        "app.ts", "auth.ts", "setup"
    ]
    
}`
```