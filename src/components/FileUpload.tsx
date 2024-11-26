import { Upload } from 'lucide-react';
import { useState } from 'react';

interface FileUploadProps {
  onFileUpload: (data: { asins: string[]; keywords: string[] }) => void;
  isProcessing: boolean;
}

export default function FileUpload({ onFileUpload, isProcessing }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = async (file: File) => {
    try {
      const arrayBuffer = await file.arrayBuffer();
      // In a real app, you'd process the Excel file here
      // For demo, we'll simulate the data
      const mockData = {
        asins: ['B01NABM1CO', 'B08N5YD6GF'],
        keywords: ['gaming mouse', 'wireless keyboard']
      };
      onFileUpload(mockData);
    } catch (error) {
      console.error('Error processing file:', error);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div
        className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".xlsx,.xls"
          onChange={handleChange}
          disabled={isProcessing}
        />
        
        <Upload className={`w-12 h-12 mb-4 ${dragActive ? 'text-blue-500' : 'text-gray-400'}`} />
        
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">Excel files only (XLSX, XLS)</p>
      </div>
    </div>
  );
}