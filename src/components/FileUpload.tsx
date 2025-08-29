"use client";

import { useState } from "react";
import { Paperclip } from "lucide-react";

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles([...files, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const openFileDialog = () => {
    document.getElementById("fileInput")?.click();
  };

  return (
    <div className="w-full h-auto bg-white rounded-md p-4 sm:p-6 flex flex-col gap-4">
      <div
        className="w-full h-[40px] rounded-lg bg-[#2970FF] flex items-center gap-2 px-4 text-white cursor-pointer"
        onClick={openFileDialog}
      >
        <Paperclip className="w-4 h-4 text-white" />
        <p className="text-sm sm:text-base">Attach Files (optional)</p>
      </div>

      <div
        className="w-full flex-1 border border-[#E6EAED] rounded-[5px] flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-[#F9FAFA]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
      >
        <p className="text-gray-500 text-sm">or move the file into this area</p>
        <input id="fileInput" type="file" multiple className="hidden" onChange={handleFileChange} />
        {files.length > 0 && (
          <ul className="mt-3 w-full text-left text-sm text-gray-700">
            {files.map((file, idx) => (
              <li key={idx} className="truncate">
                📄 {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
