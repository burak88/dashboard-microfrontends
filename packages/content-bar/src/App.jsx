import React from "react";
import ContentBar from "./components/ContentBar";
import { mockContent } from "./data/mockData";

const App = () => {
  return (
    <div>
        <ContentBar content={mockContent} />
    </div>
  );
};

export default App;
