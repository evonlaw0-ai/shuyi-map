var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#E8DED0",
    state_hover_color: "#9A3B3B",
    state_url: "",
    border_size: 1.5,
    all_states_zoomable: "yes",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MY01: {
      name: "Johor",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#johor"
    },
    MY02: {
      name: "Kedah",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#kedah"
    },
    MY03: {
      name: "Kelantan",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#kelantan"
    },
    MY04: {
      name: "Melaka",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#melaka"
    },
    MY05: {
      name: "Negeri Sembilan",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#negeri-sembilan"
    },
    MY06: {
      name: "Pahang",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#pahang"
    },
    MY07: {
      name: "Pulau Pinang",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#penang"
    },
    MY08: {
      name: "Perak",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#perak"
    },
    MY09: {
      name: "Perlis",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#perlis"
    },
    MY10: {
      name: "Selangor",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#selangor"
    },
    MY11: {
      name: "Terengganu",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#terengganu"
    },
    MY12: {
      name: "Sabah",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#sabah"
    },
    MY13: {
      name: "Sarawak",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#sarawak"
    },
    MY14: {
      name: "Kuala Lumpur",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#kuala-lumpur"
    },
    MY15: {
      name: "Labuan",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#labuan"
    },
    MY16: {
      name: "Putrajaya",
      color: "#E8DED0",
      hover_color: "#9A3B3B",
      url: "#putrajaya"
    }
  },
  locations: {
    "0": {
      name: "Kuala Lumpur",
      lat: "3.166667",
      lng: "101.7"
    }
  },
  labels: {
    MY01: {
      name: "Johor",
      parent_id: "MY01"
    },
    MY10: {
      name: "Selangor",
      parent_id: "MY10"
    },
    MY12: {
      name: "Sabah",
      parent_id: "MY12"
    },
    MY13: {
      name: "Sarawak",
      parent_id: "MY13"
    },
    MY14: {
      name: "Kuala Lumpur",
      parent_id: "MY14"
  },
  legend: {
    entries: []
  },
  regions: {}
};
