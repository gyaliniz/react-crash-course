import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookFetchExample() {
  const { data, loading } = useFetch("https://gitlab.com/api/v4/projects", {});

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}

export default CustomHookFetchExample;
