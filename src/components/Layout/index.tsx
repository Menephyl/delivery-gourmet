import React from 'react';
import WhatsAppChat from '../WhatsAppChat';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <WhatsAppChat />
    </div>
  );
}
