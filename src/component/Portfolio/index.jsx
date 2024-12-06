import Card from "../Card"

const Portfolio = (props) => {
    
    const { portfolioCard } = props;

    return (
        <section id="2" className="my-20 py-15 gap-20 h-[800px]">
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex items-center justify-center">
                    <br />
                </div>
                    <h1 className="text-5xl font-semibold">My Portfolio</h1>
                <div className="flex items-center justify-center gap-20">
                    {portfolioCard.map(card => (
                        <div key={card.id} >
                            <Card imageUrl={card.imageUrl} title={card.title} description={card.description}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio