import { Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native'
import { GrantType } from 'expo-auth-session';
import { useAuth } from '../hooks/useAuth'
import { SignIn } from '../screens/SignIn'
import { AppRoutes } from './app.routes'

export function Routes() {
    const { user } = useAuth();

    return(
        <Box flex={1} bg='gray.900'>
            <NavigationContainer>
                {/* <AppRoutes /> */}
                {user.name ? <AppRoutes /> : <SignIn />}
            </NavigationContainer>
        </Box>
    )
}