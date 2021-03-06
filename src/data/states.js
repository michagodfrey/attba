const states = [
  {
    id: "QLD",
    name: "Queensland",
    border: "unmonitored",
    department: "Department of Agriculture and Fisheries",
    url: "https://www.daf.qld.gov.au/business-priorities/biosecurity",
    pqm: "https://www.daf.qld.gov.au/__data/assets/pdf_file/0004/379138/qld-biosecurity-manual.pdf",
  },
  {
    id: "NSW",
    name: "New South Wales & ACT",
    border: "unmonitored",
    department: "Department of Primary Industries",
    url: "https://www.dpi.nsw.gov.au/biosecurity",
    pqm: "https://vinehealth.com.au/media/NSW-PQM-Jan-2016.pdf",
  },
  {
    id: "VIC",
    name: "Victoria",
    border: "unmonitored",
    department: "Agriculture Victoria",
    url: "https://agriculture.vic.gov.au/biosecurity",
    pqm: "https://agriculture.vic.gov.au/biosecurity/moving-plants-and-plant-products/plant-quarantine-manual",
  },
  {
    id: "TAS",
    name: "Tasmania",
    border: "monitored",
    department: "Department of Natural Resources and Environment Tasmania",
    url: "https://nre.tas.gov.au/biosecurity-tasmania",
    pqm: "https://nre.tas.gov.au/biosecurity-tasmania/plant-biosecurity/plant-biosecurity-manual",
  },
  {
    id: "SA",
    name: "South Australia",
    border: "monitored",
    department: "Department of Primary Industries and Regions",
    url: "https://pir.sa.gov.au/biosecurity",
    pqm: "https://pir.sa.gov.au/biosecurity/plant_health/plant_quarantine_standard_and_updated_conditions",
  },
  {
    id: "NT",
    name: "Northern Territory",
    border: "unmonitored",
    department: "Department of Industry, Tourism and Trade",
    url: "https://securent.nt.gov.au/prepare-for-an-emergency/biosecurity",
    pqm: "https://dpir.nt.gov.au/__data/assets/pdf_file/0011/396587/Plant-Quarantine-Manual.pdf",
    prohibited: "",
    restricted: "",
  },
  {
    id: "WA",
    name: "Western Australia",
    border: "monitored",
    department: "Department of Primary Industries and Regional Development",
    url: "https://www.agric.wa.gov.au/biosecurity-quarantine",
    pqm: "https://www.agric.wa.gov.au/qtine/default.asp",
  },
];

export default states;
