
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rotate-12 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-full blur-xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
    </div>
  );
};

export default FloatingElements;
