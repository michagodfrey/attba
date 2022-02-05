import React from 'react';
import States from "../components/States";
import { useGlobalContext } from '../context';
import StateModal from '../components/StateModal';

const Contact = () => {

  const { openStateModal } = useGlobalContext();

  return (
    <main>
      <StateModal />
      <div className="container row">
        <States />
        <div className="test">
          <h2>Intrastate biosecurity in Australia</h2>
          <p>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum
            cerebro. De carne lumbering animata corpora quaeritis. Summus brains
            sit morbo vel maleficia? De apocalypsi gorger omero undead survivor
            dictum mauris. Hi mindless mortuis soulless creaturas, imo evil
            stalking monstra adventus resi dentevil vultus comedat cerebella
            viventium. Qui animated corpse, cricket bat max brucks terribilem
            incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos
            comedere carnem virus. Zonbi tattered for solum oculi eorum
            defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut
            malus putrid voodoo horror. Nigh tofth eliv ingdead.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
