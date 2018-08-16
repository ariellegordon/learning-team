import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AllUnicorns from "./AllUnicorns";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AllUnicorns />, document.getElementById("root"));
registerServiceWorker();
