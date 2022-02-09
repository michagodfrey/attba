import React from "react";

const pests = [
  {
    id: 1,
    name: "Red Imported Fire Ant",
    acronym: "RIFA",
    type: "insect",
    location: "South East Queensland",
    description:
      "An invasive ant species from South America. RIFA are very aggresive ants that displace native ants and give painful bites.",
    hosts: "potted plants, soil/earth material, straw/hay/mulch",
    info: "https://www.daf.qld.gov.au/business-priorities/biosecurity/invasive-plants-animals/ants/fire-ants/eradication",
    image:
      "https://www.echo.net.au/wp-content/uploads/2019/12/Red-imported-fire-ant_1-600x413.jpg",
  },
  {
    id: 2,
    name: "Tomato Potato Psyllid",
    acronym: "TPP",
    type: "insect",
    location: "Western Australia",
    description:
      "Small sap-sucking insects native to North America. TPP feed on plants and spread plant diseases in crops. ",
    hosts:
      "plants of tomatoes, eggplant, potato, capsicum, sweet potato and others",
    info: "https://www.agric.wa.gov.au/tomato-potato-psyllid-tpp",
    image:
      "https://www.agric.wa.gov.au/sites/gateway/files/Bactericera%20cockerelli.jpg",
  },
  {
    id: 3,
    name: "Grape Phylloxera",
    acronym: "GP",
    type: "insect",
    location: "Victoria and New South Wales",
    description:
      "A soil dwelling insect that feeds on the roots of grapevines. GP is a serious pest in the wine making industry.",
    hosts: "grape vine roots, vineyard soil",
    info: "https://www.awe.gov.au/biosecurity-trade/pests-diseases-weeds/plant/grape-phylloxera",
    image:
      "https://agriculture.vic.gov.au/__data/assets/image/0009/829431/Phylloxera-insect_thumb.jpg",
  },
  {
    id: 4,
    name: "Myrtle Rust",
    acronym: "MR",
    type: "fungus",
    location: "Queensland, New South Wales, Victoria",
    description: "A fungal disease that infects native plants.",
    hosts:
      "Plants in the myrtaceae family, such as ecalypts and bottle brushes",
    info: "https://www.awe.gov.au/biosecurity-trade/invasive-species/diseases-fungi-and-parasites/myrtle-rust",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.radionz.co.nz%2Fassets%2Fnews_crops%2F36113%2Feight_col_eight_col_myrtle-rust-390.jpg%3F1497562881&f=1&nofb=1",
  },
];

export default pests;