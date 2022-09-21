import ObjetivesImg from '../../../assets/objectives.png'

export const MainSection = () => {
  return (
    <main className="Main">
      <div className="Main__content">
        <h2 className="Main__title">Find your next job</h2>
        <h3>
          Our Machine learning algorithm is so good that it’s even illegal in
          some countries. Join us to use our barelly legal algorithm that is
          actually a group of interns that work on our basement.
        </h3>
        <h3>
          We have a job for you, no matter your background or previous
          experience. Is sending random memes through chat your only skill?
          That’s ok, we got you, our Rock Star Meme Curator role is here for
          you.
        </h3>
      </div>
      <figure className="Main__image">
        <img src={ObjetivesImg} alt="" />
      </figure>
    </main>
  )
}
