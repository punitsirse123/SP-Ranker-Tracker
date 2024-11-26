import { Minus, Square, X } from 'lucide-react';
const { ipcRenderer } = window.require('electron');

export default function TitleBar() {
  return (
    <div className="h-8 bg-gray-800 flex justify-between items-center draggable">
      <div className="px-4 text-white text-sm">Rank Tracker Pro</div>
      <div className="flex">
        <button
          onClick={() => ipcRenderer.send('minimize-window')}
          className="h-8 w-12 flex items-center justify-center hover:bg-gray-700 text-white"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={() => ipcRenderer.send('maximize-window')}
          className="h-8 w-12 flex items-center justify-center hover:bg-gray-700 text-white"
        >
          <Square size={16} />
        </button>
        <button
          onClick={() => ipcRenderer.send('close-window')}
          className="h-8 w-12 flex items-center justify-center hover:bg-red-600 text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}