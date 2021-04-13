import React from 'react'
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux'
import Login from './pages/Login'
import Register from './pages/Register'
const Routes = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
                <Scene 
                key='login'
                component={Login} 
                />
                <Scene
                key='register'
                component={Register}
                />
            </Stack>
        </Router>
    )
}

export default Routes