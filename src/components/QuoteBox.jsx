import QupteButton from "./QupteButton"

const QuoteBox = ({ quote, getNewValues, backgroundObject, colorObject }) => {


    return (
        <article className="quoteBox">
            <ul className="quoteList">
                <li style={colorObject}><i className='bx bxs-quote-left' ></i></li>
                <li className="quoteQuote" style={colorObject}>{quote.quote}</li>
                <li style={colorObject}><i class='bx bxs-quote-right' ></i></li>
            </ul>
            <h2 className="quoteAuthor" style={colorObject}>{quote.author}</h2>
            <section>
                <QupteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />
            </section>

        </article>
    )
}

export default QuoteBox