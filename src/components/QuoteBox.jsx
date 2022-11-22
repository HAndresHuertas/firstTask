import QupteButton from "./QupteButton"

const QuoteBox = ({ quote, getNewValues, backgroundObject }) => {


    return (
        <article className="quoteBox">
            <p><i className='bx bxs-quote-left' ></i></p>
            <p>{quote.quote}</p>
            <h2>{quote.author}</h2>
            <section>
                <QupteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />
            </section>

        </article>
    )
}

export default QuoteBox