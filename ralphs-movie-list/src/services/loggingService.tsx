import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init(
        {
            dsn: "https://bbc42b00fc65410e8913c0c58ce7fb7e@o660145.ingest.sentry.io/5766214",
            integrations: [new Integrations.BrowserTracing()],
            tracesSampleRate: 1.0
        }
    ); 
}

function logError () {
    
}

export default {
    init,
    logError
}
