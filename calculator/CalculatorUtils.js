export const process = (argument1, argument2, mathOperation) => {
    switch (mathOperation) {
        case '+': return argument1 + argument2; 
        case '-': return argument1 - argument2; 
        case '/': return argument1 / argument2;
        case '*': return argument1 * argument2; 
        default: return 0;
    }
}