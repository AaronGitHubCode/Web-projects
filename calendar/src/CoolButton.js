import css from './styles.css'

const CoolButton = ({legacy, color, children, onClick}) => (
    <button className={'cool-button'} onClick={onClick} style={{
        borderRadius: legacy ? 0 : 10,
        backgroundColor: color
    }}>
        {children}
    </button>
)

export default CoolButton