import owner from '../../assets/owner.jpg'

export default function WhoWeAre(){
    return (
        <section className="who-we-are">
            <h2>Who We Are</h2>

            <img className="owner-picture" src={owner} alt="Errol Watson, Owner at Spectral Web Designs"/>
            
            <p>
                My name is Errol Watson, I'm a developer and web designer. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nam modi temporibus, incidunt alias libero aut cum, dolores vel, praesentium animi magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, placeat eos? Expedita laboriosam voluptate magnam quod voluptatibus, ad maxime! Alias! <small>LEARN MORE</small>
            </p>


        </section>
    )
}