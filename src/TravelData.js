// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

import tokyo1 from './assets/TokyoImage1.jpg'
import tokyo2 from './assets/TokyoImage2.jpg'
import tokyo3 from './assets/TokyoImage3.jpg'
import london1 from './assets/LondonImage1.jpg'
import london2 from './assets/LondonImage2.jpg'
import london3 from './assets/LondonImage3.jpg'
import sanfran1 from './assets/SFImage1.jpg'
import sanfran2 from './assets/SFImage2.jpg'
import sanfran3 from './assets/SFImage3.jpg'


const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: tokyo1,
    placeImg2: tokyo2,
    placeImg3: tokyo3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: london1,
    placeImg2: london2,
    placeImg3: london3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    placeImg1: sanfran1,
    placeImg2: sanfran2,
    placeImg3: sanfran3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default TravelData;
