// frontend/src/components/nexus/TelegramInvite.tsx
'use client';

import React from 'react';

interface TelegramInviteProps {
  workspaceId: string;
}

export default function TelegramInvite({ workspaceId }: TelegramInviteProps) {
  // Apnar bot er username (botfather theke jeta peyechen)
  const botUsername = "sc_for_you_bot"; 
  
  const handleInvite = () => {
    // Telegram Deep Link: Eta user-ke group select korte bolbe ar workspaceId pathabe
    const telegramLink = `https://t.me/${botUsername}?startgroup=${workspaceId}`;
    window.open(telegramLink, '_blank');
  };

  return (
    <div className="p-6 border rounded-xl bg-slate-900/50 border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg">
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Telegram Memory Sync</h3>
          <p className="text-sm text-slate-400">Team-er kotha mone rakhar jonno bot add korun</p>
        </div>
      </div>
      
      <button 
        onClick={handleInvite}
        className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
      >
        Add Bot to Group
      </button>
    </div>
  );
}