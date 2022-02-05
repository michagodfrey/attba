import React from 'react';

// made with https://www.embedmymap.com/

const Map = () => {
  return (
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
        <a href="https://www.fridaynightfunkin.net/friday-night-funkin-mods-fnf-play-online/">
          FNF
        </a>
      </div>
    </div>
  );
};

export default Map;
