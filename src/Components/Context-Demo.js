

import { createContext, useContext } from "react";

// Step 1: Create the Context
const UserContext = createContext(null);

export function Level1() {
    // Step 2: Use the Context
    const context = useContext(UserContext);
    return (
        <div className="p-4 bg-warning">
            <h4>Level1/{context}</h4>
            <Level2 />
        </div>
    );
}

export function Level2() {
    // Step 2: Use the Context
    const context = useContext(UserContext);
    return (
        <div className="p-4 bg-danger">
            <h4>Level2/{context}</h4>
        </div>
    );
}

export function ContextDemo() {
    return (
        <div className="p-4 bg-dark text-white">
            {/* Step 3: Provide the Context */}
            <UserContext.Provider value={"Phani"}>
                <h3>Parent</h3>
                <Level1 />
            </UserContext.Provider>
        </div>
    );
}
