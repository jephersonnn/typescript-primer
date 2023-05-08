# Watch Mode

**Watch Mode for a Specific File** 

In order to eliminate the hassle of tunning `tsc app.ts` everytime you want to compile the code,
you can use `tsc app.ts -w`

This will compile the specified file or code everytime it is changed.

**Watch Mode for a Directory**

In order to compile any code that is changed inside a directory or folder, you may use
`tsc --init` 
This will compile any `.ts` file on the directory.
*Make sure that you are on the right directory*

Finally, run `tsc -w` or `tsc --watch`