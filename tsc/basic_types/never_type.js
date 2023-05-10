"use strict";
//never_type.ts
//Never return types are implement if the function intends to throw an error
//This can be also implemented on functions that will never return anything.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
