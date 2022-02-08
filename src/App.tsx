import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import List from './components/List';

interface space {
  slug: string,
  img:string,
  name:string,
  description:string,
  address:string,
  hours:string,
}

function App() {
  const spaces:space[] = [
    {
      slug: 'transamerica-redwood-park',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/01%2FIMG_01.JPG?alt=media&token=6b023184-5deb-47d3-a9f0-3ff1c01f0160',
      name: 'Transamerica Redwood Park',
      description: 'This urban park, located at the foot of the Transamerica Pyramid, is a wonderful surprise. Surrounded by Redwood trees and graced with luscious ferns, the park features a fountain spouting water several feet high, and figurative bronze sculptures. There are also grassy areas, wooden benches and a concrete stage. Take-out food services are nearby. Closed after office hours.',
      address: '600 Montgomery St.',
      hours: '7am - 5:30pm'
    },
    {
      slug: 'empire-park',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/02%2FIMG_01.JPG?alt=media&token=2fabaad4-9c5b-4188-a696-e0e3c18588fa',
      name: 'Empire Park',
      description: 'From the Commercial Street lunchtime mall the visitor enters this intimate urban garden, occupying the site of a demolished building. The design is symmetrical, with brick planter beds and sitting ledges along both sides and a fountain sculpture at the end of the central axis. Benches and tables with chairs complete the furnishings of this enjoyable space.',
      address: '648 Commercial St.',
      hours: '7am - 5:30pm'
    },
    {
      slug: 'embarcadero-center',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/03%2FIMG_01.JPG?alt=media&token=badb1f5d-822f-4c7f-b9a1-176a6634d8b4',
      name: 'Embarcadero Center',
      description: 'The first of the three open spaces here is the conversion of Commercial Street between Sansome & Battery into an exclusive pedestrian walkway. The second, at the Old Federal Reserve Bank building, consists of the generous steps (snippets) to the historic building from both Battery and Sansome streets. The third, on the south side of Sacramento between Sansome & Battery, is a two-level snippet, west of the office building.',
      address: '400 Commercial St.',
      hours: '7am - 5:30pm'
    },
    {
      slug: '343-sansome',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/04%2FIMG_01.JPG?alt=media&token=2c7a2670-8baa-46f0-96b2-895ade231afe',
      name: '343 Sansome',
      description: 'There are two open spaces here. Signs at a street entrance and in an elevator guide visitors to the first: the view and sun terrace on the 15th floor. The terrace includes tables and chairs, benches, olive trees and ledge seating along granite planters. Joan Brown’s Four Seasons obelisk stands in center. Open 10a.m. to 5 p.m. The other open space is on Leidesdorff Street, adjacent to the building, which has been transformed into a lunchtime mall by installing special pavement, bollards and elements to block off the street, and moveable chairs and tables. Two food services are on the building’s ground floor.',
      address: '343 Sansome St.',
      hours: '10am - 5:00pm'
    },
    {
      slug: '555-califorina',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/05%2FIMG_01.JPG?alt=media&token=7b1b467a-8506-4ebe-9392-0497ce33f515',
      name: '555 California',
      description: 'The red granite used on the outside of this building extends to the pavement, railing and steps of this grand, almost forbidding plaza. The massive black granite sculpture accentuates this impression. On the northeast corner, there is an urban garden with six large wooden planters with olive trees and bamboo and beautifully designed teak benches. There is no restroom access or adjacent food service.',
      address: '555 California St.',
      hours: '24/7'
    },
    {
      slug: '150-california',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/06%2FIMG_01.JPG?alt=media&token=c7768cc8-60e1-4443-b41c-84d4ac3c16df',
      name: '150 California',
      description: 'The sign near the building entrance indicating the existence of a publicly accessible sun terrace is small, dark and very difficult to read. The lobby guard will ask visitors their purpose but will allow the public to pass. The sun terrace is oriented toward Front Street, has tables and chairs, plants and public art. It also offers sunny, shady and wind protected areas.',
      address: '150 California St.',
      hours: '9am - 6pm'
    },
    {
      slug: '101-california',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/07%2FIMG_01.JPG?alt=media&token=3b7f21d8-af37-4b9d-a512-45648f9d9d93',
      name: '101 California',
      description: 'Three tall, triangular, stepped pyramids, built around the garage exhaust vents, dominate this urban garden within a large plaza. The steps are clad with granite, and are used for seating and as planting beds. There is a granite fountain, with gushing water creating a pleasant sound. Two restaurants on the building’s ground floor open to the plaza with outdoor seating. Open at all times. Across the street, at 100 California Street, large planters have been placed on the sizable building setbacks. With some seating, the space could be easily converted into an attractive urban garden.',
      address: '101 California St.',
      hours: '24/7'
    },
    {
      slug: '100-pine',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/08%2FIMG_01.JPG?alt=media&token=2abe5c06-720f-4890-a817-aa0b26ff8127',
      name: '100 Pine',
      description: 'This urban garden is tucked between very tall buildings. It’s a quiet little gem of a space, accessible through the lobby to the rear or via an obscure passage off Front Street. Travertine and black granite flooring, an art piece, plants in containers and designer tables and chairs. Food services on site. Receives no sun, but light colored materials and reflected light stave off gloom. Café closes at 3 pm, building and garden at 6:30 pm.',
      address: '100 Pine St.',
      hours: '10am - 6pm'
    },
    {
      slug: 'one-bush-plaza',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/09%2FIMG_01.JPG?alt=media&token=fbba13a0-3c20-4832-a1f8-dee83194f095',
      name: 'One Bush Plaza',
      description: 'A beautifully designed and maintained urban garden surrounds the first postwar high-rise building — a “tower in a park.” It features river rocks embedded in concrete, inlaid with a striking design of bands of grey slate. A fountain sculpture spouts and drips water. The planting consists of cherry, willow and pine trees and evergreen ground cover. The garden lies below street level and resembles a moat. It is for visual enjoyment only; no seating has been provided, the river rocks are hard to walk on and no food service is available. Needed improvements: seating in garden, food service. On sunny days the stone walls along the Sansome Street sidewalk (snippets) are well used for lunching and peoplewatching.',
      address: '1 Bush St.',
      hours: '7am - 5:30pm'
    },
    {
      slug: 'citigroup-center',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/10%2FIMG_01.JPG?alt=media&token=0af1a77e-9b76-422f-9558-f8dc6694273e',
      name: 'Citigroup Center',
      description: 'This greenhouse is built into the shell of the 1912 London-Paris Bank building, with a glass roof and two-story arches opening to Sansome and Sutter Streets. The material for the arches, the walls, the entrance steps and the floor is white marble with additional black marble bands and a round black polished marble fountain in the center. Palm trees and other plants soften the severity of the space. An Art Deco bronze sculpture graces a marble niche. A food service opens to the space and café tables and chairs have been provided. There is also a seating area inside the building lobby.',
      address: '1 Sansome St.',
      hours: '24/7'
    },
    {
      slug: 'crocker-galleria',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/11%2FIMG_01.JPG?alt=media&token=b5835425-3153-4047-a75b-c710dc84227c',
      name: 'Crocker Galleria',
      description: 'There are two rooftop sun terraces here that are open whenever the Galleria is open. One sun terrace is on top of the historic bank building at Montgomery and Post Streets, and is accessed from a staircase on the easterly side of the Galleria’s top floor or from an elevator at the corner of the bank building.The terrace has ample seating on planter ledges and benches, but no tables. An attractive fountain is out of service. A second sun terrace can be accessed from an obscure staircase in the northwest corner of the Galleria’s top floor. It is a quiet refuge, offering sunny and shady places, many benches, a trellis and planters. There are many food services in the Galleria. Restrooms are on the third floor.',
      address: '50 Post St.',
      hours: '10am - 6pm'
    },
    {
      slug: 'market-center',
      img: 'https://firebasestorage.googleapis.com/v0/b/sf-popos.appspot.com/o/12%2FIMG_01.JPG?alt=media&token=6f767a97-9bb0-47fb-853e-a5489bd170d2',
      name: 'Market Center',
      description: 'The beautifully landscaped urban garden takes up the space between two highrises. A stylized version of a mountain stream runs through it. Unfortunately this is for visual enjoyment only since access is limited to office tenants only. Benches placed at the Market Street entrance and on the circular platform that floats above the space would make it more enjoyable. Needed improvements: public seating.',
      address: '555 Market St.',
      hours: '7am - 5:30pm'
    },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List spaces={spaces} />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
