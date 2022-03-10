import React from 'react';

const questions = [
  {
    id: 0,
    question: "Step 0: Decide if quarantine rules apply to the product being exported/carried.",
    answer: "The commodity you want to transport may not have any quarantine rules applied to them or only for certain states. Check the search feature on the home page to get some idea about this."
  },
  {
    id: 1,
    question: "Step 1: Find the quarantine rules for the destination state",
    answer: "Each state has its own Plant Quarantine Manual (PQM) or something similar that decribes quarantine conditions for plants and plant products such as fruit or vegetables. These are available online either in PDF format or as web applications.",
  },
  {
    id: 2,
    question: "Step 2: Find which quarantine rules apply to the plant/plant product at the destination state",
    answer: "The PQM will declare what pests need to be controlled for depending on the type of plant product. For example, fresh fruit often needs to meet conditions for fruit fly and organic materials like hay may need to meet conditions for fire ants.",
  },
  {
    id: 3,
    question: "Step 3: Find out if the applicable pests are present at the origin",
    answer: "Finaly, the quarantine rules mentioned in the PQM only apply if the plant product originates from an area that is known to have that pest. For example, fruit entering South Australia from Queensland needs a certificate because of fruit fly in that state. While fruit from Tasmania is exempt from needing the certificate because there is no known fruit fly in Tasmania. Biosecurity authorities in the origin state can issue certificates for export to other states.",
  },
  {
    id: 4,
    question: "I tried all that, but I couldn't find any rules or make sense of rules I did find :'(",
    answer: "Don't worry, some things fall outside of the defined rules. And where rules do apply, they are hard to understand. Contact the destination state's quarantine authority to find out what you need to do export your product there.",
  },
]; 

export default questions;