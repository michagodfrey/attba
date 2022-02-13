import React from 'react';
 import questions from "../data/questions";
 import Question from "../components/Question";

const Export = () => {
  return (
    <main>
      <div className="container">
        <h1>Exporting products around Australia</h1>
        <p>
          Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
          De carne lumbering animata corpora quaeritis. Summus brains sit morbo
          vel maleficia? De apocalypsi gorger omero undead survivor dictum
          mauris. Hi mindless mortuis soulless creaturas, imo evil stalking
          monstra adventus resi dentevil vultus comedat cerebella viventium. Qui
          animated corpse, cricket bat max brucks terribilem incessu zomby. The
          voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus.
          Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio
          brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth
          eliv ingdead.
        </p>
      </div>
      <div className="container container--about">
        <h2>How to find quarantine controls for plants and plant products.</h2>
        <div>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Export