function Header() {
    return (
        <div className='color-cycle' style={{
            position: "center",
            width: '100%',
            height: '2.8125rem',
            background: 'var(--accent-color)',
            border: '1px var(--stroke-color) solid',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            marginBottom: '1.5rem'}}
        />
    )
}

export default Header;