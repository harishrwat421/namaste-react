const heading = 
React.createElement("div", { id: "divheading"}, 

[React.createElement("div", { id: "child2"}, 
[
    
React.createElement("h1", { id: "heading"}, "Hello world from React !"),
React.createElement("h2", { id: "heading"}, "Hello world from React 2!")


]
),
React.createElement("div", { id: "child2"}, 
[
    
React.createElement("h1", { id: "heading"}, "Hello world from React !"),
React.createElement("h2", { id: "heading"}, "Hello world from React 2!")


]
)]


);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
