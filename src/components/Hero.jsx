function Hero({children}) {
    return (
        <div style={{
            width: '62%',
            height: '13%',
            minWidth: '31.5rem',
            minHeight: '6rem',
            borderRadius: '1.5625rem',
            border: '1px solid var(--stroke-color)',
            background: 'var(--accent-color)',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            color: 'var(--body-color)',
            alignContent: 'center',
            flexShrink: 0}}>
            {children}
        </div>
    )
}

export default Hero;