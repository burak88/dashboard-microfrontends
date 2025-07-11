import React from "react";
import { mockContent } from "./data/mockData";
import ContentBar from "./components/ContentBar";
const App = () => {
  return (
    <div>
        <ContentBar content={mockContent} />
    </div>
  );
};

export default App;
