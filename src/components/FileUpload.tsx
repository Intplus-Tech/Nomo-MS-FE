"use client";

import { useState } from "react";
import { Paperclip, X } from "lucide-react";

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter(
        (file) => file.size <= MAX_FILE_SIZE
      );
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files).filter(
        (file) => file.size <= MAX_FILE_SIZE
      );
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const openFileDialog = () => {
    document.getElementById("fileInput")?.click();
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-auto bg-white rounded-md p-4 sm:p-6 flex flex-col gap-4">
      {/* Upload button */}
      <div
        className="w-full h-[40px] rounded-lg bg-[#2970FF] flex items-center gap-2 px-4 text-white cursor-pointer"
        onClick={openFileDialog}
      >
        <Paperclip className="w-4 h-4 text-white" />
        <p className="text-sm sm:text-base">Attach Files (optional)</p>
      </div>

      {/* Drop zone */}
      <div
        className="w-full h-[120px] border border-[#E6EAED] rounded-[5px] flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-[#F9FAFA]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={openFileDialog}
      >
        <p className="text-gray-500 text-sm">or move the file into this area</p>
        <input
          id="fileInput"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Files list */}
      {files.length > 0 && (
        <div className="w-full border border-[#E6EAED] rounded-md p-3 bg-white max-h-[150px] overflow-y-auto">
          <h4 className="font-medium text-sm mb-2">Uploaded Files</h4>
          <ul className="flex flex-wrap gap-2">
            {files.map((file, idx) => (
              <li
                key={idx}
                className="flex items-center bg-[#F9FAFA] px-3 py-2 rounded border border-[#E6EAED] max-w-[180px] truncate"
              >
                <span className="truncate text-sm">
                  📄 {file.name}
                </span>
                <button
                  onClick={() => removeFile(idx)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
