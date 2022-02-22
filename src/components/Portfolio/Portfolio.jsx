import './portfolio.css';
import { SectionTitle, Portfolio as PortfolioCard } from '../../snippets';
import { portfolio as data } from '../../data'

function Portfolio() {
    return (
		<div className='portfolio section-gap section-separator' id='portfolio'>
			<div className="container">
				<SectionTitle title='portfolio' description='check out some of my projects'/>
				<div className="portfolio-wrapper">
					{ data.map(p => <PortfolioCard key={p.id} {...p} />) }
				</div>
			</div>
		</div>
    )
}

export default Portfolio