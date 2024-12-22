'use client';

// function Providers ({children}:{children:React.ReactNode}){
// return 
// <>
// {children}
// </>
// }

// export default Providers;

import { ReactNode } from 'react';
import { ThemeProvider } from './themeProviders';
import { Toaster } from '@/components/ui/toaster';

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <>
  <Toaster />   
  <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>


  {children}
  </ThemeProvider>
  </>;
};

export default Providers;