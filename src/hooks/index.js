import React from 'react';

import { AuthProvider } from '../hooks/auth';

function AppProvider({children}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default AppProvider;