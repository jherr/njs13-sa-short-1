"use client";
import { useState } from "react";

export default function NameField({
  getFiles,
}: {
  getFiles: (dir: string) => Promise<string[]>;
}) {
  const [files, setFiles] = useState<string[]>([]);

  const onGetFiles = (path: string) => {
    getFiles(path).then(setFiles);
  };

  return (
    <div className="flex flex-col text-left gap-2">
      <button onClick={() => onGetFiles(".")} className="btn">
        Current Directory
      </button>
      <button onClick={() => onGetFiles("./public")} className="btn">
        Public Directory
      </button>

      {files.map((file) => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
}
