import owner from '../../assets/owner.jpg'

export default function WhoWeAre(){
    return (
        <section className="who-we-are">

            <div className="banner-container">
                <h1 className="banner">Who We Are</h1>
                <div className="banner-overlay"></div>
            </div>

            <img className="owner-picture" src={owner} alt="Errol Watson, Owner at Spectral Web Designs"/>
            
            <p>
                My name is Errol Watson, I'm a web developer and designer. I use a modern development pattern called jamstack to create fast and effective web products for small businesses and professionals. Marketing and showcasing entrepreneurs is truly a pleasure of mine, and I'm grateful to be able to do this for those who want to grow their digital footprint.
            </p>
            <p>
                I think it's wild that companies spend thousands of dollars upfront, and even <em>more</em> every month thereafter. It's easier for a small business to make monthly payments so they can invest more in other operations. I wanted to create a business model that lets you participate at a reasonable subscription rate.
            </p>
            <button className="btn">Let's work together</button>

        </section>
    )
}