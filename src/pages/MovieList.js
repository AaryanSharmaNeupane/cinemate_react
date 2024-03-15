import React from "react";
import { Card } from "../components/Card";

export const MovieList = () => {
  return (
    <main>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
