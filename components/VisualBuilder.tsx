'use client';
import { useState } from 'react';

export default function VisualBuilder(){
  const [nodes,setNodes]=useState([]);

  function add(type){
    setNodes([...nodes, {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
      text: type==="text" ? "Your Text" : ""
    }]);
  }

  function move(id,e){
    const updated = nodes.map(n => n.id===id ? {...n, x:e.clientX/2, y:e.clientY/2} : n);
    setNodes(updated);
  }

  return (
    <div className="relative bg-white w-full h-[600px] rounded-xl shadow overflow-hidden">
      {nodes.map(n=>(
        <div key={n.id}
          draggable
          onDrag={e=>move(n.id,e)}
          className="absolute p-3 bg-black text-white rounded"
          style={{top:n.y,left:n.x}}>
          {n.text || n.type}
        </div>
      ))}
      <div className="absolute bottom-5 left-5 flex gap-4">
        <button onClick={()=>add('text')} className="p-2 bg-black text-white rounded">Add Text</button>
        <button onClick={()=>add('icon')} className="p-2 bg-black text-white rounded">Add Icon</button>
        <button onClick={()=>add('shape')} className="p-2 bg-black text-white rounded">Add Shape</button>
      </div>
    </div>
  );
}
