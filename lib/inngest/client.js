import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "welt", 
    name: "Welt", 
    retryFunction : async (attempt) => ({
        delay: Math.pow(1, attempt) * 1000, //Exponential backoff
        maxAttempts: 2,
    }),
});