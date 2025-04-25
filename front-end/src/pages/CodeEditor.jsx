import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Editor from "@monaco-editor/react";
import axios from "axios";
import Navbar from "../components/Navbar";

const socket = io("http://localhost:8000");

const CodeEditor = () => {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("codeUpdate", (newCode) => {
      setCode(newCode);
    });

    socket.on("userList", (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off("codeUpdate");
      socket.off("userList");
    };
  }, []);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    socket.emit("codeUpdate", newCode);
  };

  const handleCompile = async () => {
    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language,
        source: code,
      });
      setOutput(response.data.run.stdout || response.data.run.stderr);
    } catch (error) {
      setOutput("Compilation Error");
    }
  };

  return (
    <>
    <Navbar/>
    <h1>Hello code Editor</h1>
   <div className="pt-16 px-4 h-100vh overflow-y-auto">
    <div className="p-4 flex justify-between items-center">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
      </select>
      <button
        onClick={handleCompile}
        className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Run Code
      </button>
    </div>
      <div className="flex flex-1">
        <div className="w-3/5 border-0 rounded">
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <div className="w-2/5 p-2 ml-2 rounded bg-[#1e1e1e]">
  {/* Title Section */}
  <div className="bg-white px-3 py-2 rounded">
    <h3 className="text-center font-bold text-black">Users Online:</h3>
  </div>

  {/* Users List Section */}
  <div className="px-3 py-2 mt-2">
    <ul>
      {users.map((user, index) => (
        <li key={index} className="text-green-500">{user}</li>
      ))}
    </ul>
  </div>
</div>

      </div>

      <div className="mt-2 p-2 border bg-gray-100">
        <h3 className="font-bold">Output:</h3>
        <pre className="bg-black text-white p-2">{output}</pre>
      </div>
    </div>
    </>
  );
};

export default CodeEditor;
