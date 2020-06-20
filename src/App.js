import React from "react";
import Layout from "./layout/Layout";
import Homepage from "./containers/homepage/Homepage";
import KursConverter from "./containers/KursConverter/KursConverter";

function App() {
  return (
    <Layout>
      <KursConverter />
    </Layout>
  );
}

export default App;
