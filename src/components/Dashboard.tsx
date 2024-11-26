import { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';
import { User } from '../types';

interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    setIsUploading(true);
    try {
      // Implement file upload logic
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Stats
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-blue-600 mb-1">Requests Left</div>
            <div className="text-2xl font-bold text-blue-700">
              {user.requestsLeft}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-green-600 mb-1">Subscription</div>
            <div className="text-2xl font-bold text-green-700">
              {user.subscription}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-purple-600 mb-1">Last Update</div>
            <div className="text-2xl font-bold text-purple-700">
              2 hrs ago
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Upload New File
          </h2>
          <button
            onClick={() => {/* Implement refresh */}}
            className="text-gray-500 hover:text-gray-700"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept=".xlsx,.xls"
            disabled={isUploading}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className={`h-12 w-12 ${isUploading ? 'text-gray-400' : 'text-blue-500'}`} />
            <span className="mt-2 text-sm text-gray-600">
              {isUploading ? 'Uploading...' : 'Click to upload or drag and drop'}
            </span>
            <span className="mt-1 text-xs text-gray-500">
              Excel files only (XLSX, XLS)
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}