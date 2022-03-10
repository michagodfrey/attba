import React from 'react';
const Map = () => {

  return (
    // made with https://www.embedmymap.com/
    <div>
      <p>In future versions this map will be interactive with the search and also show quarantine zones.</p>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            title="australia biosecurity map"
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=200&amp;height=100&amp;hl=en&amp;q=Australia&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
