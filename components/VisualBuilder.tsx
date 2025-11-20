"use client";
import { useState } from "react";

type NodeType = {
  id: number;
  type: string;
};

export default function VisualBuilder() {
  const [nodes, setNodes] = useState<NodeType[]>([]);

  function add(type: string) {
    setNodes([
      ...nodes,
      {
        id: Date.now(),
        type,
      },
    ]);
  }

  return (
    <div>
      <button onClick={() => add("text")}>Add Text</button>
      <button onClick={() => add("image")}>Add Image</button>

      <div style={{ marginTop: 20 }}>
        {nodes.map((n) => (
          <div key={n.id}>
            Node: {n.type} (ID: {n.id})
          </div>
        ))}
      </div>
    </div>
  );
}
