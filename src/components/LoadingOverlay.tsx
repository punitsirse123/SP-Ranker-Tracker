interface LoadingOverlayProps {
  progress: number;
}

export default function LoadingOverlay({ progress }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Processing...</span>
            <span className="text-lg font-medium">{progress}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-500">
            Please wait while we process your request. This may take a few minutes.
          </p>
        </div>
      </div>
    </div>
  );
}