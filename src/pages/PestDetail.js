import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import pests from "../data/pests";

// temporary noob code, will improve
const PestDetail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [hosts, setHosts] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  
  useEffect(() => {
    const pestData = pests.find((item) => item.id === parseInt(id));
    setName(pestData.name);
    setAcronym(pestData.acronym);
    setType(pestData.type);
    setLocation(pestData.location);
    setDescription(pestData.description);
    setHosts(pestData.hosts);
    setInfo(pestData.info);
    setImage(pestData.image);
    
  }, [id])

  let getPest = [];

  pests.map((pest) => {
    if (pest.id === parseInt(id)) {
      getPest = {...pest};
    }
  })

  // function test() {
  //   console.log(getPest)
  // }

  return (
    <main>
      <div className="container">
        <h1>
          {name} ({acronym})
        </h1>
        <div className="pest-detail">
          <div className="pest-detail__img-container">
            <img src={image} alt={acronym} className="pest-detail__img" />
          </div>
          <div className="pest-detail__info-container">
            <p>
              <span className="bold">Type:</span> {type}
            </p>
            <p>
              <span className="bold">Location:</span> {location}
            </p>
            <p>
              <span className="bold">Description: </span>
              {description}
            </p>
            <p>
              <span className="bold">Hosts:</span> {hosts}
            </p>
          </div>
          <ExternalLink href={info} className="external-link">
            official information
          </ExternalLink>
          <Link to="/pests" className="btn">
            back
          </Link>
          {/* <button onClick={test}>click</button> */}
        </div>
      </div>
    </main>
  );

};

export default PestDetail;
