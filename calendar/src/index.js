import { createRoot } from 'react-dom/client'

import CoolButton from './CoolButton'

const jsx = 
<div style={{
    display: 'flex',
    flexDirection: 'column'
}}>
    <CoolButton legacy={true} color={'green'}>Esto es un ejemplo</CoolButton>
    <CoolButton color={'red'}>Hello World!</CoolButton>
    <CoolButton onClick={function () {
        alert('Esto es un ejemplo')
    }}>Wow another CoolButton</CoolButton>
</div>

const root = createRoot(document.getElementById('root'))
root.render(jsx)