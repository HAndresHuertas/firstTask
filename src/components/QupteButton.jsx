const QupteButton = ({ getNewValues, backgroundObject }) => {
    return (
        <button onClick={getNewValues} style={backgroundObject}>
            <i className='bx bxs-right-arrow'></i>
        </button>
    )
}

export default QupteButton