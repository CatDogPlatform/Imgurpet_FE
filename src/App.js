import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'
import AppRoutes from './routes/AppRoutes';



function App ()
{
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App;
