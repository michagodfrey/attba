import React from 'react';

const Map = () => {

  return (
    // made with https://www.embedmymap.com/
    <div>
      Fututure versions will use git and node.js for an interactive map
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=900&amp;height=500&amp;hl=en&amp;q=Australia&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
