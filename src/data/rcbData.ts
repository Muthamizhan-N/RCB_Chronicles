export interface DetailedSquad {
  batsmen: string[];
  wicketkeepers: string[];
  allrounders: string[];
  bowlers: string[];
}

export interface CampaignMoment {
  title: string;
  desc: string;
  type: 'victory' | 'defeat' | 'milestone' | 'info';
}

export interface SeasonInfo {
  year: number;
  captain: string;
  coach: string;
  detailedSquad: DetailedSquad;
  keyPlayers: string[];
  position: string;
  qualified: boolean;
  wins: number;
  losses: number;
  points: number;
  nrr: number;
  topScorer: { name: string; runs: number };
  topWicketTaker: { name: string; wickets: number };
  jerseyColors: string[]; // for rendering SVG jersey representation
  summary: string;
  moments: CampaignMoment[];
  memorableMatch: {
    opponent: string;
    result: string;
    details: string;
  };
}

export interface PlayerProfile {
  name: string;
  role: 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicketkeeper';
  nationality: 'Indian' | 'Overseas';
  country: string;
  seasons: number[];
  matches: number;
  runs: number;
  wickets: number;
  highScore?: string;
  bestBowling?: string;
  strikeRate?: number;
  average?: number;
  economy?: number;
  bio: string;
  isLegend: boolean;
}

export interface TeamRecord {
  title: string;
  value: string;
  holder: string;
  description: string;
}

export interface CaptainEraStats {
  captain: string;
  matches: number;
  wins: number;
  losses: number;
  drawsOrNoResult: number;
  winPercentage: number;
  era: string;
}

export interface StadiumInfo {
  name: string;
  established: number;
  capacity: number;
  city: string;
  nickname: string;
  bio: string;
  stats: { label: string; value: string }[];
}

export interface JerseyEvolution {
  era: string;
  colors: string[];
  desc: string;
}

export const rcbSeasons: SeasonInfo[] = [
  {
    year: 2008,
    captain: 'Rahul Dravid',
    coach: 'Martin Crowe',
    detailedSquad: {
      batsmen: ['Rahul Dravid', 'Virat Kohli', 'Ross Taylor', 'Misbah-ul-Haq', 'Shivnarine Chanderpaul', 'Wasim Jaffer', 'J. Arunkumar', 'Bharat Chipli'],
      wicketkeepers: ['Mark Boucher', 'Shreevats Goswami', 'Devraj Patil'],
      allrounders: ['Jacques Kallis', 'Cameron White', 'Balachandra Akhil', 'Sunil Joshi'],
      bowlers: ['Anil Kumble', 'Dale Steyn', 'Zaheer Khan', 'Praveen Kumar', 'Vinay Kumar', 'Nathan Bracken', 'Ashley Noffke', 'K. P. Appanna', 'Neravanda Aiyappa', 'Abdur Razzak']
    },
    keyPlayers: ['Rahul Dravid', 'Zaheer Khan', 'Jacques Kallis'],
    position: '7th / 8',
    qualified: false,
    wins: 4,
    losses: 10,
    points: 8,
    nrr: -1.161,
    topScorer: { name: 'Rahul Dravid', runs: 371 },
    topWicketTaker: { name: 'Zaheer Khan', wickets: 17 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'], // Red, Gold/Yellow (Karnataka State Colors)
    summary: 'The inaugural season was a struggle for the franchise. Dubbed "Test Team in Colored Clothing" by critics, the squad struggled to find dynamic T20 momentum, finishing second from the bottom despite Dravid\'s valiant batting efforts.',
    moments: [
      { title: 'The Historic Opener', desc: 'RCB played in the first-ever IPL match on April 18, 2008, suffering a massive defeat after Brendon McCullum scored 158* for KKR.', type: 'info' },
      { title: 'First Victory', desc: 'RCB secured their first-ever win against Mumbai Indians at the Wankhede Stadium, chasing down 166 runs.', type: 'victory' },
      { title: 'Goswami emerging', desc: 'Young wicketkeeper Shreevats Goswami made a splash scoring 52 against Delhi, earning the league\'s first Emerging Player award.', type: 'milestone' },
      { title: 'Akhil\'s Deccan Blitz', desc: 'Local batsman Balachandra Akhil hit a quickfire 27* off 7 balls, sealing a thrilling chase against Deccan Chargers.', type: 'victory' },
      { title: 'Wooden Spoon Avoided', desc: 'Despite winning only 4 games, RCB finished ahead of Deccan Chargers to secure 7th place.', type: 'info' }
    ],
    memorableMatch: {
      opponent: 'Deccan Chargers',
      result: 'Won by 5 wickets',
      details: 'Chasing 166, local batsman Balachandra Akhil smashed 27* off just 7 balls, including 3 massive sixes, to pull off an unexpected and thrilling run chase in Hyderabad.'
    }
  },
  {
    year: 2009,
    captain: 'Anil Kumble',
    coach: 'Ray Jennings',
    detailedSquad: {
      batsmen: ['Rahul Dravid', 'Virat Kohli', 'Kevin Pietersen', 'Robin Uthappa', 'Manish Pandey', 'Wasim Jaffer', 'Ross Taylor', 'Jagadeesh Arunkumar'],
      wicketkeepers: ['Mark Boucher', 'Shreevats Goswami', 'Rohit Sabharwal'],
      allrounders: ['Jacques Kallis', 'Jesse Ryder', 'Roelof van der Merwe', 'Saurabh Bandekar'],
      bowlers: ['Anil Kumble', 'Dale Steyn', 'Praveen Kumar', 'Vinay Kumar', 'Sreenath Aravind', 'Sunil Joshi', 'Tinu Yohannan', 'Udit Patel', 'Jitendra Patil']
    },
    keyPlayers: ['Anil Kumble', 'Jacques Kallis', 'Manish Pandey', 'Ross Taylor'],
    position: 'Runners-up (2nd)',
    qualified: true,
    wins: 8,
    losses: 6,
    points: 16,
    nrr: -0.191,
    topScorer: { name: 'Jacques Kallis', runs: 361 },
    topWicketTaker: { name: 'Anil Kumble', wickets: 21 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'Held in South Africa, this season was a legendary turnaround. Kevin Pietersen captained initially but left for national duty. Anil Kumble took over and injected fighting spirit. Manish Pandey became the first Indian to score an IPL century. RCB fell agonizingly short by 6 runs in the final.',
    moments: [
      { title: 'Kumble\'s 5 for 5', desc: 'Anil Kumble produced one of the greatest spells in T20 history, taking 5 wickets for just 5 runs to bowl out RR for 58.', type: 'victory' },
      { title: 'Leadership Swap', desc: 'Anil Kumble took over captaincy after Kevin Pietersen departed, triggering a five-match winning streak.', type: 'milestone' },
      { title: 'Pandey\'s Historic Ton', desc: 'Manish Pandey became the first Indian to score an IPL century, hitting an unbeaten 114* off 73 balls against Deccan Chargers.', type: 'victory' },
      { title: 'Semi-Final Domination', desc: 'RCB restricted CSK to 146 and chased it down easily by 5 wickets in Johannesburg to enter the grand final.', type: 'victory' },
      { title: 'So Close Yet So Far', desc: 'Fell just 6 runs short chasing Deccan Chargers\' target of 143 in the final, despite Kumble taking 4/16.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Deccan Chargers (Final)',
      result: 'Lost by 6 runs',
      details: 'Anil Kumble took a historic 4/16 to restrict Chargers to 143/6. However, despite a solid start, the RCB batting order crumbled, finishing at 137/9 in an absolute nail-biter.'
    }
  },
  {
    year: 2010,
    captain: 'Anil Kumble',
    coach: 'Ray Jennings',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'Rahul Dravid', 'Manish Pandey', 'Kevin Pietersen', 'Ross Taylor', 'Cameron White', 'Eoin Morgan', 'Sridharan Sriram', 'Steve Smith'],
      allrounders: ['Jacques Kallis', 'Roelof van der Merwe', 'Dillon du Preez', 'KP Appanna'],
      wicketkeepers: ['Mark Boucher', 'Robin Uthappa', 'Shreevats Goswami'],
      bowlers: ['Anil Kumble', 'Dale Steyn', 'Praveen Kumar', 'Vinay Kumar', 'Abhimanyu Mithun', 'Balachandra Akhil', 'Bhuvneshwar Kumar']
    },
    keyPlayers: ['Jacques Kallis', 'Robin Uthappa', 'Anil Kumble'],
    position: '3rd Place',
    qualified: true,
    wins: 7,
    losses: 7,
    points: 14,
    nrr: 0.219,
    topScorer: { name: 'Jacques Kallis', runs: 572 },
    topWicketTaker: { name: 'Anil Kumble', wickets: 17 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'Under Kumble, the team maintained high standards. Jacques Kallis was in sublime touch, hitting 572 runs. RCB finished 3rd by defeating Deccan Chargers in the play-off, qualifying for the Champions League T20.',
    moments: [
      { title: 'Kallis\' Fast Start', desc: 'Jacques Kallis scored consecutive unbeaten half-centuries in the opening games, anchoring the batting order.', type: 'milestone' },
      { title: 'Uthappa\'s Fast Fifties', desc: 'Robin Uthappa struck a explosive 51 off 21 balls against KXIP and 68* off 38 vs East Zone, showcasing brutal hitting.', type: 'victory' },
      { title: 'Semi-final Defeat', desc: 'RCB suffered a crushing loss to Mumbai Indians in the semi-final in Navi Mumbai.', type: 'defeat' },
      { title: 'Kumble\'s 4/16 bookings CLT20', desc: 'Anil Kumble took 4/16 to bowl out DC for 82 in the 3rd place play-off, winning by 9 wickets.', type: 'victory' },
      { title: 'CLT20 Qualification', desc: 'By finishing 3rd, RCB qualified for the Champions League Twenty20 for the second consecutive year.', type: 'milestone' }
    ],
    memorableMatch: {
      opponent: 'Deccan Chargers (3rd Place Play-off)',
      result: 'Won by 9 wickets',
      details: 'Anil Kumble spun a web with 4/16 as Deccan Chargers were bundled out for just 82. RCB chased the target down in only 13.5 overs to secure Champions League qualification.'
    }
  },
  {
    year: 2011,
    captain: 'Daniel Vettori',
    coach: 'Ray Jennings',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Saurabh Tiwary', 'Cheteshwar Pujara', 'Mayank Agarwal', 'Mohammad Kaif', 'Arun Karthik', 'Asad Pathan', 'Rilee Rossouw'],
      wicketkeepers: ['AB de Villiers', 'Arun Karthik', 'Luke Pomersbach'],
      allrounders: ['Daniel Vettori', 'Tillakaratne Dilshan', 'Chris Gayle', 'Ryan Ninan', 'Jonathan Vandiar'],
      bowlers: ['Zaheer Khan', 'S. Aravind', 'Abhimanyu Mithun', 'Charl Langeveldt', 'Dirk Nannes', 'Nuwan Pradeep', 'Syed Mohammad', 'Raju Bhatkal']
    },
    keyPlayers: ['Chris Gayle', 'Virat Kohli', 'Sreenath Aravind'],
    position: 'Runners-up (2nd)',
    qualified: true,
    wins: 9,
    losses: 4,
    points: 19,
    nrr: 0.658,
    topScorer: { name: 'Chris Gayle', runs: 608 },
    topWicketTaker: { name: 'S. Aravind', wickets: 21 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'The start of the iconic Gayle-Kohli-De Villiers era. Chris Gayle joined as a replacement for Dirk Nannes and unleashed absolute carnage, scoring two centuries. RCB dominated the league stage, but lost the final to a formidable CSK.',
    moments: [
      { title: 'Gaylestorm Unleashed', desc: 'Signed as an injury replacement, Chris Gayle hit an unbeaten 102* off 55 balls against KKR on his debut.', type: 'victory' },
      { title: 'Gayle\'s Second Ton', desc: 'Chris Gayle smashed 107 off 49 balls against Kings XI Punjab, hitting 9 sixes at the Chinnaswamy.', type: 'victory' },
      { title: 'Table Toppers', desc: 'RCB finished top of the league stage with 9 wins and 19 points under captain Daniel Vettori.', type: 'milestone' },
      { title: 'Qualifier 2 Triumph', desc: 'Defeated Mumbai Indians in Qualifier 2 as Chris Gayle smashed 89 off 47 balls to enter the finals.', type: 'victory' },
      { title: 'Final Heartbreak vs CSK', desc: 'Fell in the final to CSK at Chepauk, failing to chase down a massive 205-run target.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Kolkata Knight Riders',
      result: 'Won by 9 wickets',
      details: 'In his debut game for RCB, Chris Gayle smashed an unbeaten 102* off 55 balls at Eden Gardens, chasing down 172 with ease and starting the "Gaylestorm" era.'
    }
  },
  {
    year: 2012,
    captain: 'Daniel Vettori',
    coach: 'Venkatesh Prasad',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Saurabh Tiwary', 'Cheteshwar Pujara', 'Mayank Agarwal', 'Mohammad Kaif', 'Arun Karthik', 'Rilee Rossouw', 'Jonathan Vandiar'],
      allrounders: ['Daniel Vettori', 'Chris Gayle', 'Tillakaratne Dilshan', 'Andrew McDonald', 'Syed Mohammad', 'Abrar Kazi'],
      wicketkeepers: ['AB de Villiers', 'Arun Karthik'],
      bowlers: ['Zaheer Khan', 'Vinay Kumar', 'Sreenath Aravind', 'Abhimanyu Mithun', 'Muttiah Muralitharan', 'Dirk Nannes', 'Charl Langeveldt', 'Harshal Patel', 'KP Appanna']
    },
    keyPlayers: ['Chris Gayle', 'Virat Kohli', 'AB de Villiers'],
    position: '5th Place',
    qualified: false,
    wins: 8,
    losses: 7,
    points: 17,
    nrr: -0.123,
    topScorer: { name: 'Chris Gayle', runs: 733 },
    topWicketTaker: { name: 'Vinay Kumar', wickets: 19 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'A season of near-misses. Gayle was unstoppable, hitting 733 runs including a legendary 128* vs Delhi. However, death bowling and close defeats meant RCB tied on points with CSK but missed playoffs on NRR.',
    moments: [
      { title: 'Gayle\'s 128* vs Delhi', desc: 'Chris Gayle hit 128* including 13 sixes and shared a 204-run partnership with Virat Kohli in Delhi.', type: 'victory' },
      { title: 'ABD Finishes in Style', desc: 'AB de Villiers scored 47* off 17 balls to pull off a dramatic, high-speed chase against Deccan Chargers.', type: 'victory' },
      { title: 'Vettori Steps Down', desc: 'Daniel Vettori sat himself out to play Muttiah Muralitharan, handing captaincy over to Virat Kohli for the first time.', type: 'milestone' },
      { title: 'Murali\'s Mastery', desc: 'Muttiah Muralitharan bowled a match-winning spell of 3/21 to restrict Rajasthan Royals.', type: 'victory' },
      { title: 'Playoff Disappointment', desc: 'Tied on points with CSK, RCB missed the playoffs due to a slightly lower Net Run Rate.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Delhi Daredevils',
      result: 'Won by 21 runs',
      details: 'Chris Gayle scored 128* off 62 balls, hitting 13 massive sixes. Partnering with Virat Kohli (73*), they put on an unbeaten 204-run partnership to compile 215/1.'
    }
  },
  {
    year: 2013,
    captain: 'Virat Kohli',
    coach: 'Ray Jennings',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'Mayank Agarwal', 'Cheteshwar Pujara', 'Arun Karthik', 'Saurabh Tiwary', 'Moises Henriques', 'Christopher Barnwell', 'Tillakaratne Dilshan'],
      wicketkeepers: ['AB de Villiers', 'Arun Karthik', 'KL Rahul'],
      allrounders: ['Chris Gayle', 'Moises Henriques', 'Daniel Christian', 'Ravi Rampaul', 'Christopher Barnwell', 'Syed Mohammad', 'Daniel Vettori'],
      bowlers: ['Vinay Kumar', 'Zaheer Khan', 'Jaydev Unadkat', 'Murali Kartik', 'RP Singh', 'Abhimanyu Mithun', 'Harshal Patel', 'Andrew McDonald', 'KP Appanna', 'Sreenath Aravind', 'Muttiah Muralitharan']
    },
    keyPlayers: ['Chris Gayle', 'Virat Kohli', 'Vinay Kumar'],
    position: '5th Place',
    qualified: false,
    wins: 9,
    losses: 7,
    points: 18,
    nrr: 0.115,
    topScorer: { name: 'Chris Gayle', runs: 708 },
    topWicketTaker: { name: 'Vinay Kumar', wickets: 23 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'Virat Kohli was named full-time captain. The highlight was Chris Gayle\'s historic 175* against Pune Warriors. Despite winning 9 games, another late-stage stumble kept RCB in 5th place, missing playoffs.',
    moments: [
      { title: 'The 175* Record', desc: 'Chris Gayle struck 175* off 66 balls, creating the highest individual score in T20 history against PWI.', type: 'victory' },
      { title: 'Kohli full-time Captain', desc: 'Virat Kohli was officially appointed full-time captain of Royal Challengers Bangalore.', type: 'milestone' },
      { title: 'Unadkat\'s 5-Wicket Haul', desc: 'Jaydev Unadkat bowled a brilliant spell of 5/25 to help defend a tight total against Delhi.', type: 'victory' },
      { title: 'Super Over Thriller', desc: 'RCB defeated Delhi Daredevils in a dramatic Super Over after the scores tied at 152.', type: 'victory' },
      { title: 'NRR Heartbreak Again', desc: 'Despite winning 9 out of 16 games, RCB missed qualification on NRR once again.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Pune Warriors India',
      result: 'Won by 130 runs',
      details: 'Chris Gayle struck a mind-blowing 175* off 66 balls, the highest individual T20 score in history. He hit 17 sixes, helping RCB post 263/5, another all-time IPL team record.'
    }
  },
  {
    year: 2014,
    captain: 'Virat Kohli',
    coach: 'Allan Donald',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'Yuvraj Singh', 'Vijay Zol', 'Sachin Rana', 'Tanmay Mishra', 'Nic Maddinson', 'Rilee Rossouw'],
      wicketkeepers: ['AB de Villiers', 'Parthiv Patel'],
      allrounders: ['Chris Gayle', 'Albie Morkel', 'Shadab Jakati', 'Yogesh Takawale'],
      bowlers: ['Mitchell Starc', 'Varun Aaron', 'Ashoke Dinda', 'Harshal Patel', 'Yuzvendra Chahal', 'Abu Nechim', 'Sandeep Warrier', 'Muttiah Muralitharan']
    },
    keyPlayers: ['AB de Villiers', 'Yuvraj Singh', 'Mitchell Starc'],
    position: '7th Place',
    qualified: false,
    wins: 5,
    losses: 9,
    points: 10,
    nrr: -0.428,
    topScorer: { name: 'AB de Villiers', runs: 395 },
    topWicketTaker: { name: 'Varun Aaron', wickets: 16 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'Despite breaking the bank for Yuvraj Singh (who scored 376 runs), RCB struggled. The batting collapsed too often, and Mitchell Starc stood alone in a weak bowling lineup. The team finished 7th.',
    moments: [
      { title: 'Mega Bid for Yuvraj', desc: 'RCB made headlines by buying Yuvraj Singh for a record INR 14 crore in the player auction.', type: 'milestone' },
      { title: 'Starc joins RCB', desc: 'Mitchell Starc made his IPL debut, immediately providing lethal opening spells and yorkers.', type: 'info' },
      { title: 'Chahal\'s Debut season', desc: 'Uncapped Yuzvendra Chahal took 12 wickets and became RCB\'s primary spin threat.', type: 'milestone' },
      { title: 'De Villiers Steyn battle', desc: 'AB de Villiers scored 89* and famously hit Dale Steyn for 24 runs in the 19th over to chase down 156 vs SRH.', type: 'victory' },
      { title: 'Batting Collapses', desc: 'A string of low totals in Bangalore caused RCB to finish second-to-last on the table.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Sunrisers Hyderabad',
      result: 'Won by 4 wickets',
      details: 'Chasing 156, AB de Villiers smashed an incredible 89* off 41 balls, famously looting 24 runs in a single over off his international teammate Dale Steyn to seal the game.'
    }
  },
  {
    year: 2015,
    captain: 'Virat Kohli',
    coach: 'Gary Kirsten',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'Mandeep Singh', 'Manvinder Bisla', 'Dinesh Karthik', 'Sarfaraz Khan', 'Nic Maddinson', 'Sean Abbott', 'Vijay Zol'],
      wicketkeepers: ['AB de Villiers', 'Dinesh Karthik', 'Manvinder Bisla'],
      allrounders: ['Chris Gayle', 'David Wiese', 'Darren Sammy', 'Jalaj Saxena', 'S. Badrinath', 'Rilee Rossouw'],
      bowlers: ['Mitchell Starc', 'Harshal Patel', 'Yuzvendra Chahal', 'Varun Aaron', 'Abu Nechim', 'Ashok Dinda', 'Iqbal Abdulla', 'Sreenath Aravind', 'Adam Milne']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'Mitchell Starc', 'Yuzvendra Chahal', 'Dinesh Karthik'],
    position: '3rd Place',
    qualified: true,
    wins: 7,
    losses: 5,
    points: 16,
    nrr: 1.037,
    topScorer: { name: 'AB de Villiers', runs: 513 },
    topWicketTaker: { name: 'Yuzvendra Chahal', wickets: 23 },
    jerseyColors: ['#EC1C24', '#F6D55C', '#E5A93B'],
    summary: 'Mitchell Starc returned from injury to spearhead a revitalized bowling unit, supporting the destructive Kohli-Gayle-ABD trio. RCB reached the playoffs, won the Eliminator, but lost to CSK in Qualifier 2 in Ranchi.',
    moments: [
      { title: 'Starc\'s Impact Return', desc: 'After missing early matches, Starc returned to pick up 20 wickets in 13 matches at an economy of 6.76.', type: 'victory' },
      { title: 'De Villiers\' 133* vs Mumbai', desc: 'AB de Villiers smashed 133* off 59 balls in Mumbai, sharing a 215*-run stand with Kohli.', type: 'victory' },
      { title: 'Gaylestorm at Chinnaswamy', desc: 'Chris Gayle scored 117 off 57 balls against KXIP as RCB posted a mammoth 226/3.', type: 'victory' },
      { title: 'Eliminator RR Demolition', desc: 'RCB bowled out Rajasthan Royals for 109 to record a massive 71-run win in the Eliminator.', type: 'victory' },
      { title: 'Qualifier 2 Stumble', desc: 'A batting collapse on a slow Ranchi pitch saw RCB lose by 3 wickets to CSK, missing the final.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Rajasthan Royals (Eliminator)',
      result: 'Won by 71 runs',
      details: 'AB de Villiers scored 66 to lift RCB to 180/4. In reply, Mitchell Starc and Yuzvendra Chahal dismantled RR for just 109, securing a thumping playoff victory.'
    }
  },
  {
    year: 2016,
    captain: 'Virat Kohli',
    coach: 'Daniel Vettori',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'KL Rahul', 'Mandeep Singh', 'Sarfaraz Khan', 'Travis Head', 'Kedar Jadhav', 'Sachin Baby'],
      wicketkeepers: ['KL Rahul', 'AB de Villiers'],
      allrounders: ['Shane Watson', 'Stuart Binny', 'David Wiese', 'Chris Jordan', 'Iqbal Abdulla'],
      bowlers: ['Yuzvendra Chahal', 'Sreenath Aravind', 'Varun Aaron', 'Harshal Patel', 'Kane Richardson', 'Samuel Badree', 'Tabraiz Shamsi', 'Abu Nechim']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'KL Rahul', 'Shane Watson', 'Yuzvendra Chahal'],
    position: 'Runners-up (2nd)',
    qualified: true,
    wins: 8,
    losses: 6,
    points: 16,
    nrr: 0.931,
    topScorer: { name: 'Virat Kohli', runs: 973 },
    topWicketTaker: { name: 'Yuzvendra Chahal', wickets: 21 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'], // Black and Red
    summary: 'The most spectacular batting display in IPL history. Virat Kohli scored an unprecedented 973 runs with 4 centuries, and AB de Villiers added 687 runs. RCB made a heroic run to the finals but lost a high-scoring final to SRH by just 8 runs.',
    moments: [
      { title: 'The 973 Record', desc: 'Virat Kohli had a legendary campaign, scoring 973 runs with 4 spectacular centuries.', type: 'milestone' },
      { title: 'The 229 Partnership', desc: 'Kohli and De Villiers both hit centuries and recorded a world-record 229-run stand vs Gujarat Lions.', type: 'victory' },
      { title: 'Kohli Stitches Blitz', desc: 'Despite playing with a split webbing and stitches on his hand, Kohli scored 113 off 50 balls against Kings XI.', type: 'victory' },
      { title: 'Qualifier 1 Miracle Rescue', desc: 'From 68/6, AB de Villiers hit a masterful 79* and shared a 91-run stand with Iqbal Abdulla to beat GL.', type: 'victory' },
      { title: 'Final Collapse vs SRH', desc: 'Chasing 209 in the final, RCB collapsed from 140/1 to finish 200/7, losing by 8 runs.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Gujarat Lions (Qualifier 1)',
      result: 'Won by 4 wickets',
      details: 'Chasing 159, RCB collapsed to 68/6. AB de Villiers played a masterpiece of 79* off 47 balls, sharing an unbeaten 91-run stand with spinner Iqbal Abdulla (33*) to pull off a miracle win.'
    }
  },
  {
    year: 2017,
    captain: 'Virat Kohli',
    coach: 'Daniel Vettori',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'KL Rahul', 'Mandeep Singh', 'Kedar Jadhav', 'Sarfaraz Khan', 'Travis Head', 'Sachin Baby'],
      wicketkeepers: ['KL Rahul', 'Vishnu Vinod', 'AB de Villiers'],
      allrounders: ['Shane Watson', 'Stuart Binny', 'Pawan Negi', 'Iqbal Abdulla', 'Samuel Badree', 'Chris Jordan', 'Tymal Mills'],
      bowlers: ['Yuzvendra Chahal', 'Sreenath Aravind', 'Harshal Patel', 'Aniket Choudhary', 'Tabraiz Shamsi', 'Billy Stanlake', 'Avesh Khan']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'KL Rahul', 'Shane Watson', 'Yuzvendra Chahal'],
    position: '8th Place',
    qualified: false,
    wins: 3,
    losses: 10,
    points: 7,
    nrr: -1.299,
    topScorer: { name: 'Virat Kohli', runs: 308 },
    topWicketTaker: { name: 'Yuzvendra Chahal', wickets: 14 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'A disastrous campaign derailed by pre-season injuries. Virat Kohli missed early games with a shoulder injury. The low point came against KKR where RCB was bowled out for 49—the lowest total in IPL history. The team finished dead last.',
    moments: [
      { title: 'Injuries Strike Early', desc: 'Kohli and De Villiers missed early matches due to shoulder and back injuries, stalling momentum.', type: 'info' },
      { title: 'Badree\'s Hat-Trick', desc: 'Samuel Badree took a brilliant hat-trick (4/9) against Mumbai Indians on his home debut.', type: 'milestone' },
      { title: 'The 49-All-Out Disaster', desc: 'RCB collapsed to 49 all out against KKR at Eden Gardens, recording the lowest IPL total ever.', type: 'defeat' },
      { title: 'Gayle\'s 12k Runs Milestone', desc: 'Chris Gayle became the first player to pass 12,000 runs in T20 cricket during a win vs Gujarat.', type: 'milestone' },
      { title: 'Wooden Spoon Finish', desc: 'Finished at the bottom of the table with only 3 wins in a forgettable season.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Delhi Daredevils',
      result: 'Won by 10 runs',
      details: 'In the final league match, Virat Kohli hit 58 to guide RCB to 157. The spinners, led by Pawan Negi (3/10), restricted Delhi to 147, ending a painful season with a victory.'
    }
  },
  {
    year: 2018,
    captain: 'Virat Kohli',
    coach: 'Daniel Vettori',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Brendon McCullum', 'Mandeep Singh', 'Sarfaraz Khan', 'Manan Vohra', 'Pavan Deshpande'],
      wicketkeepers: ['Quinton de Kock', 'Parthiv Patel', 'AB de Villiers'],
      allrounders: ['Moeen Ali', 'Colin de Grandhomme', 'Chris Woakes', 'Washington Sundar', 'Pawan Negi', 'Aniruddha Joshi'],
      bowlers: ['Yuzvendra Chahal', 'Umesh Yadav', 'Mohammed Siraj', 'Tim Southee', 'Nathan Coulter-Nile', 'Kulwant Khejroliya', 'Murugan Ashwin']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Quinton de Kock', 'Brendon McCullum', 'Moeen Ali', 'Yuzvendra Chahal'],
    position: '6th Place',
    qualified: false,
    wins: 6,
    losses: 8,
    points: 12,
    nrr: 0.129,
    topScorer: { name: 'Virat Kohli', runs: 530 },
    topWicketTaker: { name: 'Umesh Yadav', wickets: 20 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'Following a mega-auction, RCB rebooted their squad. Umesh Yadav bowled brilliantly in the Powerplay. However, failure to defend scores at the death cost them heavily, leading to a 6th-place finish.',
    moments: [
      { title: 'Kohli Re-retained', desc: 'Virat Kohli was retained for a record INR 17 Crore heading into the fresh mega-auction.', type: 'milestone' },
      { title: 'Umesh\'s Powerplay Carnage', desc: 'Umesh Yadav was in lethal form with the new ball, picking up 20 wickets overall.', type: 'victory' },
      { title: 'ABD Spider-Man Catch', desc: 'AB de Villiers pulled off a stunning, gravity-defying boundary catch nicknamed "Spider-Man" vs SRH.', type: 'victory' },
      { title: 'Siraj Joins RCB', desc: 'Young pacer Mohammed Siraj was acquired in the auction, beginning his long journey with RCB.', type: 'info' },
      { title: 'Late-Stage Stumbles', desc: 'Losses in crucial close games in the final week kept RCB out of the playoff spots.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Sunrisers Hyderabad',
      result: 'Won by 14 runs',
      details: 'AB de Villiers hit a rapid 69 and then pulled off a spectacular, gravity-defying catch at deep mid-wicket that went viral. RCB posted 218 and successfully defended it.'
    }
  },
  {
    year: 2019,
    captain: 'Virat Kohli',
    coach: 'Gary Kirsten',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Shimron Hetmyer', 'Devdutt Padikkal', 'Himmat Singh', 'Gurkeerat Singh Mann'],
      wicketkeepers: ['Parthiv Patel', 'Heinrich Klaasen', 'AB de Villiers'],
      allrounders: ['Marcus Stoinis', 'Moeen Ali', 'Shivam Dube', 'Colin de Grandhomme', 'Pawan Negi', 'Washington Sundar', 'Milind Kumar'],
      bowlers: ['Yuzvendra Chahal', 'Mohammed Siraj', 'Umesh Yadav', 'Navdeep Saini', 'Tim Southee', 'Nathan Coulter-Nile', 'Kulwant Khejroliya', 'Prayas Ray Barman']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Moeen Ali', 'Marcus Stoinis', 'Yuzvendra Chahal', 'Navdeep Saini'],
    position: '8th Place',
    qualified: false,
    wins: 5,
    losses: 8,
    points: 11,
    nrr: -0.607,
    topScorer: { name: 'Virat Kohli', runs: 464 },
    topWicketTaker: { name: 'Yuzvendra Chahal', wickets: 18 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'RCB started catastrophically, losing their first 6 matches. A late boost arrived with the signing of veteran Dale Steyn, but injuries cut his stint short, and a rain-affected final match sealed their last-place finish.',
    moments: [
      { title: 'Six Losses in a Row', desc: 'RCB suffered the worst start in franchise history, losing the first six games of the season.', type: 'defeat' },
      { title: 'Steyn\'s Brief Return', desc: 'Dale Steyn joined as a mid-season replacement, winning 2 games before picking up a shoulder injury.', type: 'victory' },
      { title: 'CSK 1-run Nailbiter', desc: 'RCB defended 161 as Parthiv Patel ran out Shardul Thakur on the final ball to win by 1 run.', type: 'victory' },
      { title: 'Kohli\'s KKR Century', desc: 'Virat Kohli smashed 100 off 58 balls in Kolkata to set up a high-scoring victory.', type: 'victory' },
      { title: 'Rainout Ends Campaign', desc: 'A washed-out match against Rajasthan Royals confirmed a last-place finish for RCB.', type: 'info' }
    ],
    memorableMatch: {
      opponent: 'Chennai Super Kings',
      result: 'Won by 1 run',
      details: 'RCB made 161. In reply, MS Dhoni played a blazing knock of 84*. With 2 runs needed off the final ball, Umesh Yadav beat Shardul Thakur, and Parthiv Patel effected a run-out to seal a 1-run win.'
    }
  },
  {
    year: 2020,
    captain: 'Virat Kohli',
    coach: 'Simon Katich',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Devdutt Padikkal', 'Aaron Finch', 'Gurkeerat Singh Mann', 'Josh Philippe', 'Pavan Deshpande'],
      wicketkeepers: ['AB de Villiers', 'Josh Philippe', 'Parthiv Patel'],
      allrounders: ['Moeen Ali', 'Shivam Dube', 'Chris Morris', 'Washington Sundar', 'Isuru Udana', 'Pawan Negi', 'Shahbaz Ahmed'],
      bowlers: ['Yuzvendra Chahal', 'Navdeep Saini', 'Mohammed Siraj', 'Umesh Yadav', 'Dale Steyn', 'Adam Zampa']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Devdutt Padikkal', 'Aaron Finch', 'Yuzvendra Chahal', 'Mohammed Siraj'],
    position: '4th Place',
    qualified: true,
    wins: 7,
    losses: 7,
    points: 14,
    nrr: -0.172,
    topScorer: { name: 'Devdutt Padikkal', runs: 473 },
    topWicketTaker: { name: 'Yuzvendra Chahal', wickets: 21 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'Played in the UAE due to COVID-19, RCB qualified for the playoffs for the first time in 4 years. Uncapped opener Devdutt Padikkal was the find of the season, scoring 473 runs. The campaign ended with a loss to SRH in the Eliminator.',
    moments: [
      { title: 'IPL moves to UAE', desc: 'The tournament was shifted to Dubai, Abu Dhabi, and Sharjah due to the pandemic.', type: 'info' },
      { title: 'Padikkal\'s Debut impact', desc: 'Uncapped local batsman Devdutt Padikkal scored 56 on debut and recorded 5 half-centuries.', type: 'milestone' },
      { title: 'Super Over MI Victory', desc: 'Chased down Jasprit Bumrah\'s 7 runs in the Super Over after both teams scored 201.', type: 'victory' },
      { title: 'Siraj\'s Double Maiden', desc: 'Mohammed Siraj became the first bowler to bowl two maidens in an IPL game, taking 3/8 vs KKR.', type: 'victory' },
      { title: 'Eliminator Knockout', desc: 'Suffered a close defeat to Sunrisers Hyderabad in the Eliminator to bow out.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Mumbai Indians',
      result: 'Won in Super Over',
      details: 'Both teams scored exactly 201 runs. In the Super Over, Navdeep Saini restricted MI to just 7 runs. Virat Kohli and AB de Villiers chased it down on the final ball off Jasprit Bumrah.'
    }
  },
  {
    year: 2021,
    captain: 'Virat Kohli',
    coach: 'Simon Katich',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'AB de Villiers', 'Devdutt Padikkal', 'Rajat Patidar', 'Sachin Baby', 'Suyash Prabhudessai', 'Tim David'],
      wicketkeepers: ['AB de Villiers', 'KS Bharat', 'Finn Allen'],
      allrounders: ['Glenn Maxwell', 'Dan Christian', 'Washington Sundar', 'Shahbaz Ahmed', 'Kyle Jamieson', 'Wanindu Hasaranga', 'Daniel Sams'],
      bowlers: ['Mohammed Siraj', 'Harshal Patel', 'Yuzvendra Chahal', 'Navdeep Saini', 'George Garton', 'Akash Deep']
    },
    keyPlayers: ['Virat Kohli', 'AB de Villiers', 'Glenn Maxwell', 'Harshal Patel', 'Mohammed Siraj', 'Yuzvendra Chahal'],
    position: '3rd Place',
    qualified: true,
    wins: 9,
    losses: 5,
    points: 18,
    nrr: -0.14,
    topScorer: { name: 'Glenn Maxwell', runs: 513 },
    topWicketTaker: { name: 'Harshal Patel', wickets: 32 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'Glenn Maxwell breathed new life into the middle order, while Harshal Patel equaled the all-time IPL record with 32 wickets (winning the Purple Cap). This marked Virat Kohli\'s final season as captain and AB de Villiers\' final IPL appearance.',
    moments: [
      { title: 'Harshal\'s Hat-Trick', desc: 'Harshal Patel claimed a hat-trick against Mumbai Indians, finishing with a 5-wicket haul.', type: 'victory' },
      { title: 'Maxwell\'s Masterclass', desc: 'Glenn Maxwell scored 513 runs at a strike rate of 144, anchoring the middle order.', type: 'victory' },
      { title: 'Kohli Steps Down', desc: 'Virat Kohli announced he would step down as captain at the end of the 2021 season.', type: 'milestone' },
      { title: 'Bharat\'s Last-Ball Six', desc: 'KS Bharat hit a last-ball six off DC\'s Avesh Khan to pull off a dramatic 165-run chase.', type: 'victory' },
      { title: 'ABD\'s Final Game', desc: 'The Eliminator defeat against KKR marked AB de Villiers\' final match in competitive cricket.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Delhi Capitals',
      result: 'Won by 7 wickets',
      details: 'Chasing 165, RCB needed 5 runs off the final ball. Srikar Bharat launched Avesh Khan over long-on for a monumental six to clinch a dramatic victory.'
    }
  },
  {
    year: 2022,
    captain: 'Faf du Plessis',
    coach: 'Sanjay Bangar',
    detailedSquad: {
      batsmen: ['Faf du Plessis', 'Virat Kohli', 'Rajat Patidar', 'Suyash Prabhudessai', 'Sherfane Rutherford'],
      wicketkeepers: ['Dinesh Karthik', 'Anuj Rawat', 'Luvnith Sisodia'],
      allrounders: ['Glenn Maxwell', 'Shahbaz Ahmed', 'Mahipal Lomror', 'David Willey', 'Wanindu Hasaranga', 'Finn Allen'],
      bowlers: ['Mohammed Siraj', 'Harshal Patel', 'Josh Hazlewood', 'Akash Deep', 'Siddarth Kaul', 'Karn Sharma', 'Jason Behrendorff']
    },
    keyPlayers: ['Faf du Plessis', 'Virat Kohli', 'Dinesh Karthik', 'Glenn Maxwell', 'Wanindu Hasaranga', 'Josh Hazlewood'],
    position: '3rd Place',
    qualified: true,
    wins: 8,
    losses: 6,
    points: 16,
    nrr: -0.253,
    topScorer: { name: 'Faf du Plessis', runs: 468 },
    topWicketTaker: { name: 'Wanindu Hasaranga', wickets: 26 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'Faf du Plessis took the reins of leadership. Dinesh Karthik reinvented himself as a lethal finisher, scoring 330 runs at a strike rate of 183. Wanindu Hasaranga grabbed 26 wickets. RCB reached Qualifier 2 but fell to Rajasthan Royals.',
    moments: [
      { title: 'Faf named Captain', desc: 'Faf du Plessis was purchased at the auction and named captain for the post-Kohli era.', type: 'milestone' },
      { title: 'Karthik\'s Finisher Renaissance', desc: 'Dinesh Karthik played explosive cameos, earning a recall to the Indian national T20 squad.', type: 'victory' },
      { title: 'Patidar\'s Playoff Ton', desc: 'Rajat Patidar hit a heroic 112* off 54 balls in the Eliminator against Lucknow Super Giants.', type: 'victory' },
      { title: 'Hasaranga\'s 26 Wickets', desc: 'Wanindu Hasaranga fell just 1 wicket short of the Purple Cap, leading RCB\'s spin department.', type: 'milestone' },
      { title: 'Qualifier 2 Exit', desc: 'RCB lost to Rajasthan Royals in Qualifier 2 in Ahmedabad, finishing 3rd overall.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Lucknow Super Giants (Eliminator)',
      result: 'Won by 14 runs',
      details: 'Unheralded Rajat Patidar played the innings of a lifetime, scoring 112* off 54 balls to carry RCB to 207/4, defending it successfully in a high-pressure match.'
    }
  },
  {
    year: 2023,
    captain: 'Faf du Plessis',
    coach: 'Sanjay Bangar',
    detailedSquad: {
      batsmen: ['Faf du Plessis', 'Virat Kohli', 'Rajat Patidar', 'Suyash Prabhudessai', 'Anuj Rawat', 'Finn Allen'],
      wicketkeepers: ['Dinesh Karthik', 'Anuj Rawat', 'Finn Allen'],
      allrounders: ['Glenn Maxwell', 'Mahipal Lomror', 'Shahbaz Ahmed', 'Michael Bracewell', 'David Willey', 'Wayne Parnell', 'Sonu Yadav'],
      bowlers: ['Mohammed Siraj', 'Harshal Patel', 'Karn Sharma', 'Akash Deep', 'Vijaykumar Vyshak', 'Josh Hazlewood', 'Reece Topley', 'Himanshu Sharma', 'Avinash Singh']
    },
    keyPlayers: ['Faf du Plessis', 'Virat Kohli', 'Glenn Maxwell', 'Mohammed Siraj', 'Dinesh Karthik', 'Michael Bracewell'],
    position: '6th Place',
    qualified: false,
    wins: 7,
    losses: 7,
    points: 14,
    nrr: 0.135,
    topScorer: { name: 'Faf du Plessis', runs: 730 },
    topWicketTaker: { name: 'Mohammed Siraj', wickets: 19 },
    jerseyColors: ['#0A0A0A', '#EC1C24', '#D4AF37'],
    summary: 'The top order consisting of Faf (730 runs), Kohli (639 runs), and Maxwell (400 runs) completely dominated opposing bowlers. However, a weak middle-order support and bowling vulnerability in home conditions led to a 6th-place finish.',
    moments: [
      { title: 'Faf-Kohli opening Stands', desc: 'The duo put on multiple 100-run partnerships, dominating opening bowling spells.', type: 'victory' },
      { title: 'Siraj\'s Powerplay domination', desc: 'Mohammed Siraj took 10 powerplay wickets, leading the domestic pace attack.', type: 'milestone' },
      { title: 'Maxwell\'s 200+ Strike Rate', desc: 'Glenn Maxwell scored 400 runs at an astonishing strike rate of 183.4.', type: 'victory' },
      { title: 'Kohli Back-to-Back Tons', desc: 'Virat Kohli hit consecutive centuries against SRH and GT in the final week of the tournament.', type: 'victory' },
      { title: 'Gill Knocks RCB Out', desc: 'Shubman Gill\'s century for Gujarat Titans chased down RCB\'s 197 in a must-win final league match.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Mumbai Indians',
      result: 'Won by 8 wickets',
      details: 'Chasing 172, Virat Kohli (82*) and Faf du Plessis (73) tore apart the MI bowling line-up, completing a flawless run chase in just 16.2 overs at the Chinnaswamy.'
    }
  },
  {
    year: 2024,
    captain: 'Faf du Plessis',
    coach: 'Andy Flower',
    detailedSquad: {
      batsmen: ['Faf du Plessis', 'Virat Kohli', 'Rajat Patidar', 'Suyash Prabhudessai', 'Anuj Rawat', 'Will Jacks'],
      wicketkeepers: ['Dinesh Karthik', 'Anuj Rawat'],
      allrounders: ['Glenn Maxwell', 'Cameron Green', 'Mahipal Lomror', 'Swapnil Singh', 'Tom Curran', 'Manoj Bhandage'],
      bowlers: ['Mohammed Siraj', 'Yash Dayal', 'Lockie Ferguson', 'Alzarri Joseph', 'Karn Sharma', 'Mayank Dagar', 'Himanshu Sharma', 'Akash Deep', 'Reece Topley']
    },
    keyPlayers: ['Virat Kohli', 'Faf du Plessis', 'Rajat Patidar', 'Will Jacks', 'Cameron Green', 'Yash Dayal'],
    position: '4th Place',
    qualified: true,
    wins: 7,
    losses: 7,
    points: 14,
    nrr: 0.459,
    topScorer: { name: 'Virat Kohli', runs: 741 },
    topWicketTaker: { name: 'Yash Dayal', wickets: 15 },
    jerseyColors: ['#004B87', '#EC1C24', '#D4AF37'], // Royal blue, Red, Gold
    summary: 'One of cricket\'s greatest comebacks. Rooted to the bottom of the table with 1 win in 8 matches, RCB won 6 consecutive games in dramatic fashion, knocking out CSK in a direct playoff decider before losing to RR in the Eliminator.',
    moments: [
      { title: 'Name Change & New Jersey', desc: 'The franchise officially renamed from "Bangalore" to "Bengaluru" and adopted a blue/red jersey.', type: 'milestone' },
      { title: '1 Win in 8 Matches', desc: 'RCB suffered a disastrous first half of the season, falling to 10th place.', type: 'defeat' },
      { title: 'The Six-Game Streak', desc: 'RCB made an historic comeback, winning six matches in a row to keep playoff hopes alive.', type: 'victory' },
      { title: 'The CSK Decider Miracle', desc: 'Beat CSK by 27 runs in a direct playoff decider, defending 17 runs in the final over off Yash Dayal.', type: 'victory' },
      { title: 'Eliminator Exit to RR', desc: 'The magical run came to an end in Ahmedabad as Rajasthan Royals chased 173 in the final over.', type: 'defeat' }
    ],
    memorableMatch: {
      opponent: 'Chennai Super Kings',
      result: 'Won by 27 runs',
      details: 'RCB needed to win by 18+ runs to secure a playoff spot. They posted 218/5. Yash Dayal defended 17 runs in the final over, dismissing Dhoni and conceding just 7 to seal qualification.'
    }
  },
  {
    year: 2025,
    captain: 'Rajat Patidar',
    coach: 'Andy Flower',
    detailedSquad: {
      batsmen: ['Rajat Patidar', 'Virat Kohli', 'Devdutt Padikkal', 'Swastik Chikara'],
      wicketkeepers: ['Jitesh Sharma', 'Phil Salt'],
      allrounders: ['Liam Livingstone', 'Tim David', 'Romario Shepherd', 'Krunal Pandya', 'Jacob Bethell', 'Manoj Bhandage'],
      bowlers: ['Josh Hazlewood', 'Bhuvneshwar Kumar', 'Yash Dayal', 'Suyash Sharma', 'Rasikh Dar Salam', 'Nuwan Thushara', 'Lungi Ngidi', 'Mohit Rathee', 'Abhinandan Singh']
    },
    keyPlayers: ['Virat Kohli', 'Rajat Patidar', 'Josh Hazlewood', 'Krunal Pandya', 'Phil Salt', 'Jitesh Sharma'],
    position: 'Champions (2nd on Table)',
    qualified: true,
    wins: 9,
    losses: 4,
    points: 19,
    nrr: 0.301,
    topScorer: { name: 'Virat Kohli', runs: 657 },
    topWicketTaker: { name: 'Josh Hazlewood', wickets: 22 },
    jerseyColors: ['#004B87', '#EC1C24', '#D4AF37'],
    summary: 'Following the 2025 mega-auction, Rajat Patidar was named captain. Under his composed leadership and Andy Flower\'s coaching, RCB built an incredible momentum. Defeating Punjab Kings by 6 runs in a tense final, RCB secured their historic first-ever IPL title.',
    moments: [
      { title: 'Patidar named Captain', desc: 'Rajat Patidar was officially named captain of the franchise following the mega-auction.', type: 'milestone' },
      { title: 'Second on Table', desc: 'RCB finished 2nd in the league stage, level on points (19) with leaders Punjab Kings.', type: 'milestone' },
      { title: 'Livingstone\'s Wankhede Storm', desc: 'Liam Livingstone smashed 88* off 40 balls as RCB chased down 202 at Wankhede against MI.', type: 'victory' },
      { title: 'Qualifier 1 Victory', desc: 'Beat Punjab Kings in Qualifier 1 to seal their spot in the grand final.', type: 'victory' },
      { title: 'Maiden IPL Trophy!', desc: 'RCB won their first-ever IPL title, defeating Punjab Kings by 6 runs in the final in Chennai.', type: 'victory' }
    ],
    memorableMatch: {
      opponent: 'Punjab Kings (Final)',
      result: 'Won by 6 runs',
      details: 'RCB defended a tight 168 in the final. Bhuvneshwar Kumar and Josh Hazlewood bowled brilliant death overs, restricting Punjab to 162 to secure RCB\'s historic first IPL championship.'
    }
  },
  {
    year: 2026,
    captain: 'Rajat Patidar',
    coach: 'Andy Flower',
    detailedSquad: {
      batsmen: ['Virat Kohli', 'Rajat Patidar', 'Devdutt Padikkal'],
      wicketkeepers: ['Jitesh Sharma', 'Phil Salt', 'Jordan Cox'],
      allrounders: ['Krunal Pandya', 'Tim David', 'Romario Shepherd', 'Jacob Bethell', 'Venkatesh Iyer'],
      bowlers: ['Josh Hazlewood', 'Bhuvneshwar Kumar', 'Suyash Sharma', 'Rasikh Dar Salam']
    },
    keyPlayers: ['Virat Kohli', 'Rajat Patidar', 'Josh Hazlewood', 'Phil Salt', 'Krunal Pandya', 'Bhuvneshwar Kumar'],
    position: 'Champions (1st)',
    qualified: true,
    wins: 9,
    losses: 5,
    points: 18,
    nrr: 0.783,
    topScorer: { name: 'Virat Kohli', runs: 675 },
    topWicketTaker: { name: 'Bhuvneshwar Kumar', wickets: 28 },
    jerseyColors: ['#004B87', '#EC1C24', '#D4AF37'],
    summary: 'RCB completed their transition into an IPL dynasty, successfully defending their crown. Led by Rajat Patidar, they topped the group stage with a massive +0.783 NRR. Bhuvneshwar Kumar captured 28 wickets, and they defeated Gujarat Titans in Ahmedabad to win back-to-back championships.',
    moments: [
      { title: 'Title Defense Begins', desc: 'RCB started their season with three straight victories, establishing their championship intent.', type: 'victory' },
      { title: 'Kohli\'s 675-run Campaign', desc: 'Virat Kohli dominated the batting charts, anchoring several high-scoring chases.', type: 'victory' },
      { title: 'Bhuvneshwar\'s Wicket Harvest', desc: 'Bhuvneshwar Kumar took 28 wickets, winning the Purple Cap and providing critical death breakthroughs.', type: 'milestone' },
      { title: 'Table Toppers', desc: 'RCB finished top of the league stage with 9 wins and a league-leading NRR of +0.783.', type: 'milestone' },
      { title: 'Back-to-Back Champions!', desc: 'RCB defeated Gujarat Titans by 5 wickets in Ahmedabad on May 31, 2026, to win their second IPL title.', type: 'victory' }
    ],
    memorableMatch: {
      opponent: 'Gujarat Titans (Final)',
      result: 'Won by 5 wickets',
      details: 'Chasing 179 in the final, Virat Kohli scored a vital 64, and Liam Livingstone hit an unbeaten 42* off 18 balls to seal the chase with 5 wickets and 5 balls to spare.'
    }
  }
];

// Helper to get list of unique player names dynamically
export function getAllUniquePlayerNames(): string[] {
  const names = new Set<string>();
  rcbSeasons.forEach((season) => {
    const squad = season.detailedSquad;
    squad.batsmen.forEach(n => names.add(n));
    squad.wicketkeepers.forEach(n => names.add(n));
    squad.allrounders.forEach(n => names.add(n));
    squad.bowlers.forEach(n => names.add(n));
  });
  return Array.from(names).sort();
}

// Full Profile Database (for prominent players)
export const rcbPlayers: PlayerProfile[] = [
  {
    name: 'Virat Kohli',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
    matches: 282,
    runs: 9099,
    wickets: 4,
    highScore: '113*',
    strikeRate: 133.4,
    average: 38.9,
    bio: 'The ultimate heartbeat of the franchise. Virat Kohli is the only player in IPL history to play for a single franchise in every single edition of the tournament (2008–present). He served as captain from 2013 to 2021, and returned to lead in 2025. He holds the record for most runs in IPL history and the legendary single-season record of 973 runs in 2016.',
    isLegend: true
  },
  {
    name: 'AB de Villiers',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    country: 'South Africa',
    seasons: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    matches: 156,
    runs: 4491,
    wickets: 0,
    highScore: '133*',
    strikeRate: 158.6,
    average: 41.2,
    bio: 'Affectionately known as "Mr. 360", AB de Villiers is globally recognized as one of the most innovative and explosive batsmen to ever play the game. Joining RCB in 2011, he forged an unbreakable bond with the fans and a legendary batting partnership with Virat Kohli, winning numerous matches from seemingly impossible situations.',
    isLegend: true
  },
  {
    name: 'Chris Gayle',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'West Indies',
    seasons: [2011, 2012, 2013, 2014, 2015, 2016, 2017],
    matches: 85,
    runs: 3163,
    wickets: 5,
    highScore: '175*',
    strikeRate: 151.2,
    average: 43.3,
    bio: 'The "Universe Boss" Chris Gayle joined RCB in 2011 as a replacement player and completely revolutionized modern T20 opening. In his RCB career, he won two Orange Caps and established an iconic presence at Chinnaswamy Stadium, highlighted by his T20 world-record score of 175* against Pune Warriors India in 2013.',
    isLegend: true
  },
  {
    name: 'Yuzvendra Chahal',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    matches: 113,
    runs: 37,
    wickets: 139,
    bestBowling: '4/25',
    economy: 7.58,
    bio: 'RCB\'s all-time leading wicket-taker. Yuzvendra Chahal joined RCB in 2014 as an uncapped leg-spin bowler and quickly grew into the team\'s primary defensive and attacking weapon. Playing the majority of his games at the batting-friendly M. Chinnaswamy Stadium, Chahal mastered the art of brave leg-spin, flighting the ball to outwit world-class batsmen.',
    isLegend: true
  },
  {
    name: 'Anil Kumble',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2009, 2010],
    matches: 42,
    runs: 35,
    wickets: 45,
    bestBowling: '5/5',
    economy: 6.58,
    bio: 'One of the pioneers of the franchise. Anil Kumble took over the captaincy in 2009 during a tough phase, leading the team into the IPL finals in South Africa and the 2010 third-place finish. His spell of 5 wickets for just 5 runs against Rajasthan Royals in 2009 remains one of the greatest bowling spells in IPL history.',
    isLegend: true
  },
  {
    name: 'Rahul Dravid',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2009, 2010],
    matches: 43,
    runs: 898,
    wickets: 0,
    highScore: '75*',
    strikeRate: 116.8,
    average: 26.4,
    bio: 'The inaugural captain of Royal Challengers Bangalore. Rahul Dravid anchored the batting lineup during RCB\'s initial seasons, scoring 371 runs in 2008 as the team\'s top scorer. His classic, technically sound approach was essential during the franchise\'s developmental years.',
    isLegend: true
  },
  {
    name: 'Rajat Patidar',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2021, 2022, 2024, 2025, 2026],
    matches: 72,
    runs: 2125,
    wickets: 0,
    highScore: '112*',
    strikeRate: 151.4,
    average: 36.8,
    bio: 'The championship-winning captain. Rajat Patidar became an RCB hero in 2022 when he scored a magnificent 112* in the Eliminator. Appointed captain before the 2025 season, Patidar wrote his name in RCB history books by leading the franchise to back-to-back IPL titles in 2025 and 2026.',
    isLegend: true
  },
  {
    name: 'Faf du Plessis',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'South Africa',
    seasons: [2022, 2023, 2024],
    matches: 44,
    runs: 1636,
    wickets: 0,
    highScore: '96',
    strikeRate: 147.2,
    average: 41.9,
    bio: 'Faf du Plessis took over the RCB captaincy in 2022 following Virat Kohli stepping down. He led RCB to the playoffs in both 2022 and 2024, providing exceptional consistency at the top of the order. He had his best season in 2023, hammering 730 runs alongside Virat Kohli.',
    isLegend: false
  },
  {
    name: 'Glenn Maxwell',
    role: 'All-Rounder',
    nationality: 'Overseas',
    country: 'Australia',
    seasons: [2021, 2022, 2023, 2024],
    matches: 52,
    runs: 1262,
    wickets: 18,
    highScore: '78',
    strikeRate: 159.3,
    average: 28.7,
    bio: 'Nicknamed "The Big Show", Glenn Maxwell arrived in 2021 and immediately solved RCB\'s long-standing middle-order dependency. His explosive spin hitting and handy off-breaks were vital in three consecutive playoff finishes between 2021 and 2024.',
    isLegend: false
  },
  {
    name: 'Harshal Patel',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2012, 2013, 2014, 2015, 2016, 2017, 2021, 2022, 2023],
    matches: 80,
    runs: 230,
    wickets: 99,
    bestBowling: '5/27',
    economy: 8.40,
    bio: 'Harshal Patel had two stints at RCB, but his second stint in 2021 was legendary. He won the Purple Cap in 2021 with 32 wickets, including a hat-trick against Mumbai Indians. His deceptive dipping slower balls made him one of the most effective death-overs bowlers.',
    isLegend: false
  },
  {
    name: 'Mohammed Siraj',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    matches: 87,
    runs: 104,
    wickets: 83,
    bestBowling: '4/21',
    economy: 8.44,
    bio: 'Mohammed Siraj joined RCB in 2018. Through periods of struggle and intense criticism, the franchise backed him, and Siraj repaid the faith by evolving into a premier Indian fast bowler. He is celebrated for his opening spells of swing bowling, highlighted by his double-wicket-maiden over against KKR in 2020.',
    isLegend: false
  },
  {
    name: 'Dinesh Karthik',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    country: 'India',
    seasons: [2015, 2022, 2023, 2024],
    matches: 60,
    runs: 937,
    wickets: 0,
    highScore: '83',
    strikeRate: 162.8,
    average: 26.8,
    bio: 'Dinesh Karthik had two spells with RCB, but his second spell starting in 2022 was phenomenal. As the designated finisher, he rescued RCB in countless matches, batting at strike rates exceeding 180 and earning a spot back in the Indian T20 World Cup squad before retiring in 2024.',
    isLegend: false
  },
  {
    name: 'Jitesh Sharma',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    country: 'India',
    seasons: [2025, 2026],
    matches: 28,
    runs: 540,
    wickets: 0,
    highScore: '58*',
    strikeRate: 146.4,
    average: 24.5,
    bio: 'Acquired in the 2025 Mega Auction to fill the shoes of the retired Dinesh Karthik. Jitesh Sharma played as the primary wicketkeeper-batsman in RCB\'s back-to-back championship-winning campaigns in 2025 and 2026, providing crucial lower-order hitting.',
    isLegend: false
  },
  {
    name: 'Phil Salt',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'England',
    seasons: [2025, 2026],
    matches: 29,
    runs: 910,
    wickets: 0,
    highScore: '79',
    strikeRate: 162.3,
    average: 32.5,
    bio: 'Signed in the 2025 mega-auction, Phil Salt provided the high-octane opening starts for RCB alongside Virat Kohli in their championship-winning years. Played primarily as an opening batsman and explosive fielder, with Jitesh Sharma taking wicketkeeping duties.',
    isLegend: false
  },
  {
    name: 'Bhuvneshwar Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2025, 2026],
    matches: 31,
    runs: 48,
    wickets: 45,
    bestBowling: '4/18',
    economy: 7.22,
    bio: 'The veteran swing bowler was signed in the 2025 auction. Bhuvneshwar Kumar was pivotal in the 2025 final win and dominated the 2026 season, capturing 28 wickets to win the Purple Cap and spearhead RCB\'s championship-defending bowling attack.',
    isLegend: false
  },
  {
    name: 'Jacques Kallis',
    role: 'All-Rounder',
    nationality: 'Overseas',
    country: 'South Africa',
    seasons: [2008, 2009, 2010],
    matches: 46,
    runs: 1132,
    wickets: 30,
    highScore: '89*',
    strikeRate: 112.5,
    average: 31.4,
    bio: 'One of the greatest all-rounders of all time, Jacques Kallis was a pillar of stability for RCB in the first three seasons. He scored crucial runs at the top order and picked up crucial wickets, helping RCB reach the final in 2009 and the playoffs in 2010.',
    isLegend: false
  },
  {
    name: 'Dale Steyn',
    role: 'Bowler',
    nationality: 'Overseas',
    country: 'South Africa',
    seasons: [2008, 2009, 2010, 2019, 2020],
    matches: 38,
    runs: 18,
    wickets: 39,
    bestBowling: '3/18',
    economy: 6.95,
    bio: 'The legendary South African fast bowler had two stints at RCB. Steyn provided blistering pace in the initial years (2008-2010) and returned in 2019 to inject fiery energy into the bowling line-up, becoming an iconic figure at RCB.',
    isLegend: false
  },
  {
    name: 'Zaheer Khan',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2011, 2012, 2013],
    matches: 44,
    runs: 78,
    wickets: 49,
    bestBowling: '4/17',
    economy: 7.64,
    bio: 'One of India\'s greatest left-arm pacers. Zaheer Khan had two stints with RCB. He led the domestic pace bowling unit during the 2008 inaugural season and returned in 2011 to anchor the bowling attack that reached the IPL finals.',
    isLegend: false
  },
  {
    name: 'Mitchell Starc',
    role: 'Bowler',
    nationality: 'Overseas',
    country: 'Australia',
    seasons: [2014, 2015],
    matches: 27,
    runs: 96,
    wickets: 34,
    bestBowling: '4/15',
    economy: 7.16,
    bio: 'Though he only played two seasons for RCB, Mitchell Starc\'s impact was immense. In 2015, he led the attack with blistering pace and lethal yorkers, picking up 20 wickets in 13 matches at an economy of 6.76, making RCB a dominant bowling team.',
    isLegend: false
  },
  {
    name: 'Krunal Pandya',
    role: 'All-Rounder',
    nationality: 'Indian',
    country: 'India',
    seasons: [2025, 2026],
    matches: 30,
    runs: 480,
    wickets: 22,
    highScore: '46*',
    strikeRate: 138.4,
    bio: 'Signed in the 2025 Mega Auction, Krunal Pandya provided essential spin-bowling control in the middle overs and vital left-handed cameos, playing an integral role in RCB\'s back-to-back trophy runs.',
    isLegend: false
  },
  {
    name: 'Tim David',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'Australia',
    seasons: [2021, 2025, 2026],
    matches: 28,
    runs: 512,
    wickets: 0,
    highScore: '51*',
    strikeRate: 168.4,
    bio: 'After a brief appearance in 2021, Tim David returned to RCB in 2025. He served as the primary lower-order power-hitter, helping finish run chases with explosive strike rates during the championship years.',
    isLegend: false
  },
  {
    name: 'Devdutt Padikkal',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2019, 2020, 2021, 2025, 2026],
    matches: 62,
    runs: 1780,
    wickets: 0,
    highScore: '101*',
    strikeRate: 128.6,
    average: 31.5,
    bio: 'Padikkal had a stellar debut in 2020, winning the Emerging Player award. After playing for other franchises, he returned to RCB in 2025, anchoring the middle order in their title-winning seasons.',
    isLegend: false
  },
  {
    name: 'Mark Boucher',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    country: 'South Africa',
    seasons: [2008, 2009, 2010],
    matches: 31,
    runs: 388,
    wickets: 0,
    highScore: '50*',
    strikeRate: 122.4,
    bio: 'The veteran South African keeper was RCB\'s primary gloveman in the first three seasons, providing solid lower-order resistance and tidy keeping.',
    isLegend: false
  },
  {
    name: 'Ross Taylor',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'New Zealand',
    seasons: [2008, 2009, 2010],
    matches: 22,
    runs: 517,
    wickets: 0,
    highScore: '81*',
    strikeRate: 142.0,
    bio: 'Famous New Zealand middle-order batsman who struck some massive sixes over mid-wicket at the Chinnaswamy during RCB\'s initial seasons.',
    isLegend: false
  },
  {
    name: 'Praveen Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2009, 2010],
    matches: 44,
    runs: 264,
    wickets: 34,
    bestBowling: '3/18',
    economy: 7.21,
    bio: 'The swing specialist was a key domestic bowler for RCB, notable for taking an IPL hat-trick against Rajasthan Royals in the 2010 season.',
    isLegend: false
  },
  {
    name: 'Vinay Kumar',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2008, 2009, 2010, 2012, 2013],
    matches: 64,
    runs: 143,
    wickets: 72,
    bestBowling: '4/40',
    economy: 8.32,
    bio: 'The "Davangere Express" was RCB\'s dependable domestic pace bowler for several years. Vinay Kumar picked up 72 wickets in his RCB career, using clever variations and local knowledge to lead the domestic bowling contingent.',
    isLegend: false
  },
  {
    name: 'Manish Pandey',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2009, 2010],
    matches: 26,
    runs: 416,
    wickets: 0,
    highScore: '114*',
    strikeRate: 122.3,
    average: 26.0,
    bio: 'Manish Pandey etched his name in IPL history books when he scored 114* against Deccan Chargers in 2009, becoming the first-ever Indian player to score an IPL century. The feat catapulted the young Karnataka batsman into national limelight.',
    isLegend: false
  },
  {
    name: 'Robin Uthappa',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2009, 2010],
    matches: 31,
    runs: 549,
    wickets: 0,
    highScore: '68*',
    strikeRate: 140.2,
    average: 24.9,
    bio: 'Robin Uthappa played two highly impactful seasons for RCB. His aggressive batting in South Africa (2009) and at home (2010) was key in establishing the team\'s batting power, often playing explosive cameo innings.',
    isLegend: false
  },
  {
    name: 'Tillakaratne Dilshan',
    role: 'Batsman',
    nationality: 'Overseas',
    country: 'Sri Lanka',
    seasons: [2011, 2012, 2013],
    matches: 30,
    runs: 587,
    wickets: 0,
    highScore: '76*',
    strikeRate: 115.4,
    bio: 'The Sri Lankan opener paired with Chris Gayle in the early 2010s, providing solid starts and his trademark "Dil-scoop" shot.',
    isLegend: false
  },
  {
    name: 'Muttiah Muralitharan',
    role: 'Bowler',
    nationality: 'Overseas',
    country: 'Sri Lanka',
    seasons: [2012, 2013, 2014],
    matches: 22,
    runs: 11,
    wickets: 19,
    bestBowling: '3/21',
    economy: 6.44,
    bio: 'The spin wizard spent his twilight years at RCB, providing immense class, control, and mentorship to young spinners like Chahal.',
    isLegend: false
  },
  {
    name: 'Shane Watson',
    role: 'All-Rounder',
    nationality: 'Overseas',
    country: 'Australia',
    seasons: [2016, 2017],
    matches: 24,
    runs: 250,
    wickets: 25,
    bestBowling: '4/15',
    economy: 8.58,
    bio: 'The veteran Australian all-rounder played in the 2016 final campaign. He took crucial wickets in the death overs, though his batting form was mixed.',
    isLegend: false
  },
  {
    name: 'KL Rahul',
    role: 'Wicketkeeper',
    nationality: 'Indian',
    country: 'India',
    seasons: [2013, 2016],
    matches: 19,
    runs: 417,
    wickets: 0,
    highScore: '68*',
    strikeRate: 142.4,
    bio: 'Local Bengaluru batsman KL Rahul had a breakout season for RCB in 2016, scoring 397 runs as keeper-batsman, supporting Kohli and ABD.',
    isLegend: false
  },
  {
    name: 'Liam Livingstone',
    role: 'All-Rounder',
    nationality: 'Overseas',
    country: 'England',
    seasons: [2025],
    matches: 14,
    runs: 412,
    wickets: 7,
    highScore: '88*',
    strikeRate: 164.2,
    bio: 'One of the most explosive batsmen in modern T20, Livingstone joined RCB in 2025. He struck 88* off 40 balls against MI and finished critical chases to earn the 2025 title.',
    isLegend: false
  },
  {
    name: 'Yash Dayal',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2024, 2025],
    matches: 28,
    runs: 12,
    wickets: 31,
    bestBowling: '3/20',
    economy: 8.12,
    bio: 'Dayal became an RCB legend in 2024 by defending 17 runs in the final over against CSK to clinch playoffs. He remained a key domestic paceman in the 2025 championship season.',
    isLegend: false
  },
  {
    name: 'Swapnil Singh',
    role: 'All-Rounder',
    nationality: 'Indian',
    country: 'India',
    seasons: [2024, 2025],
    matches: 20,
    runs: 120,
    wickets: 14,
    bestBowling: '2/13',
    economy: 7.82,
    bio: 'The veteran domestic spinner was a lucky charm in 2024, taking crucial wickets. He provided excellent backup spin options in the 2025 campaign.',
    isLegend: false
  },
  {
    name: 'Yuvraj Singh',
    role: 'All-Rounder',
    nationality: 'Indian',
    country: 'India',
    seasons: [2014],
    matches: 14,
    runs: 376,
    wickets: 5,
    highScore: '83',
    strikeRate: 135.2,
    bio: 'Bought for a record-breaking sum in 2014, Yuvraj had a mixed season but scored three valuable half-centuries, including a blistering 83 against Rajasthan Royals.',
    isLegend: false
  },
  {
    name: 'Moeen Ali',
    role: 'All-Rounder',
    nationality: 'Overseas',
    country: 'England',
    seasons: [2018, 2019, 2020],
    matches: 19,
    runs: 309,
    wickets: 10,
    highScore: '66',
    strikeRate: 158.4,
    bio: 'English all-rounder who played explosive cameos in the middle-order and bowled handy off-spin, particularly in the 2019 season.',
    isLegend: false
  },
  {
    name: 'Washington Sundar',
    role: 'All-Rounder',
    nationality: 'Indian',
    country: 'India',
    seasons: [2018, 2019, 2020, 2021],
    matches: 32,
    runs: 167,
    wickets: 19,
    bestBowling: '3/16',
    economy: 6.94,
    bio: 'Talented off-spinner who bowled crucial overs in the Powerplay during the 2020 season in the UAE, keeping runs extremely tight.',
    isLegend: false
  },
  {
    name: 'Umesh Yadav',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2018, 2019, 2020],
    matches: 33,
    runs: 54,
    wickets: 28,
    bestBowling: '3/23',
    economy: 8.41,
    bio: 'Umesh bowl with extreme pace during his RCB years. He took 20 wickets in 2018, dismantling top-orders in the Powerplay.',
    isLegend: false
  },
  {
    name: 'Sarfaraz Khan',
    role: 'Batsman',
    nationality: 'Indian',
    country: 'India',
    seasons: [2015, 2016, 2017, 2018],
    matches: 25,
    runs: 228,
    wickets: 0,
    highScore: '45*',
    strikeRate: 142.3,
    bio: 'Young dynamic batsman notable for his innovative ramp shots behind the keeper. He was retained by RCB ahead of the 2018 auction.',
    isLegend: false
  },
  {
    name: 'Karn Sharma',
    role: 'Bowler',
    nationality: 'Indian',
    country: 'India',
    seasons: [2022, 2023, 2024],
    matches: 20,
    runs: 45,
    wickets: 18,
    bestBowling: '3/33',
    economy: 8.95,
    bio: 'The veteran leg-spinner played vital roles in 2023 and 2024, providing crucial wickets and hitting a memorable near-win six against KKR.',
    isLegend: false
  },
  {
    name: 'Jordan Cox',
    role: 'Wicketkeeper',
    nationality: 'Overseas',
    country: 'England',
    seasons: [2026],
    matches: 0,
    runs: 0,
    wickets: 0,
    bio: 'English wicketkeeper-batsman acquired by Royal Challengers Bengaluru for the 2026 season.',
    isLegend: false
  },
  {
    name: 'Venkatesh Iyer',
    role: 'All-Rounder',
    nationality: 'Indian',
    country: 'India',
    seasons: [2026],
    matches: 14,
    runs: 310,
    wickets: 4,
    highScore: '54',
    strikeRate: 142.5,
    bio: 'Indian hard-hitting all-rounder acquired by Royal Challengers Bengaluru for the 2026 season for INR 7 crore, contributing crucial middle-order runs and handy medium pace in their title-defense campaign.',
    isLegend: false
  }
];

export const rcbAchievements = [
  {
    category: 'IPL Championships',
    count: 2,
    years: ['2025', '2026'],
    details: 'Won back-to-back championships in 2025 and 2026 under captain Rajat Patidar, breaking the franchise jinx in spectacular fashion.'
  },
  {
    category: 'IPL Finals',
    count: 5,
    years: ['2009', '2011', '2016', '2025', '2026'],
    details: 'Reached the grand finals 5 times, winning the championship in 2025 and 2026.'
  },
  {
    category: 'Playoff Qualifications',
    count: 11,
    years: ['2009', '2010', '2011', '2015', '2016', '2020', '2021', '2022', '2024', '2025', '2026'],
    details: 'Qualified for the postseason stages in 11 out of 19 seasons played.'
  }
];

export const rcbPlayerAwards = [
  { award: 'Orange Cap (Most Runs)', player: 'Chris Gayle', year: '2011', stats: '608 Runs (12 matches)' },
  { award: 'Orange Cap (Most Runs)', player: 'Chris Gayle', year: '2012', stats: '733 Runs (15 matches)' },
  { award: 'Orange Cap (Most Runs)', player: 'Virat Kohli', year: '2016', stats: '973 Runs (16 matches) - All-time IPL Record' },
  { award: 'Orange Cap (Most Runs)', player: 'Virat Kohli', year: '2024', stats: '741 Runs (15 matches)' },
  { award: 'Orange Cap (Most Runs)', player: 'Virat Kohli', year: '2026', stats: '675 Runs (16 matches)' },
  { award: 'Purple Cap (Most Wickets)', player: 'Harshal Patel', year: '2021', stats: '32 Wickets (15 matches) - Joint-highest in IPL' },
  { award: 'Purple Cap (Most Wickets)', player: 'Bhuvneshwar Kumar', year: '2026', stats: '28 Wickets (16 matches)' },
  { award: 'Most Valuable Player', player: 'Chris Gayle', year: '2011', stats: '608 Runs & 8 Wickets' },
  { award: 'Most Valuable Player', player: 'Virat Kohli', year: '2016', stats: '973 Runs (4 centuries)' },
  { award: 'Emerging Player of the Season', player: 'Shreevats Goswami', year: '2008', stats: 'Wicketkeeper-batsman, scored critical runs' },
  { award: 'Emerging Player of the Season', player: 'Devdutt Padikkal', year: '2020', stats: '473 Runs (5 half-centuries)' }
];

export const rcbTeamRecords: TeamRecord[] = [
  {
    title: 'Highest IPL Team Total',
    value: '263/5',
    holder: 'RCB vs Pune Warriors India',
    description: 'Set on April 23, 2013, fueled by Chris Gayle\'s historic 175*.'
  },
  {
    title: 'Highest Individual Score in T20s',
    value: '175*',
    holder: 'Chris Gayle',
    description: 'Smashed off 66 balls with 17 sixes and 13 fours against PWI in 2013.'
  },
  {
    title: 'Most Runs in a Single IPL Season',
    value: '973 Runs',
    holder: 'Virat Kohli',
    description: 'Scored in 2016 at an average of 81.08, including 4 centuries.'
  },
  {
    title: 'Highest Partnership in IPL History',
    value: '229 Runs',
    holder: 'Virat Kohli & AB de Villiers',
    description: 'For the 2nd wicket against Gujarat Lions in 2016 at Chinnaswamy.'
  },
  {
    title: 'Most Wickets in a Single Season (Indian)',
    value: '32 Wickets',
    holder: 'Harshal Patel',
    description: 'Set during the 2021 season, matching Dwayne Bravo\'s record.'
  },
  {
    title: 'Lowest Team Score in IPL History',
    value: '49 All Out',
    holder: 'RCB vs KKR',
    description: 'Bowled out in 9.4 overs at Eden Gardens, Kolkata in 2017.'
  }
];

export const captainEraStats: CaptainEraStats[] = [
  { captain: 'Rajat Patidar', matches: 31, wins: 20, losses: 10, drawsOrNoResult: 1, winPercentage: 64.51, era: '2025 - 2026' },
  { captain: 'Anil Kumble', matches: 35, wins: 19, losses: 16, drawsOrNoResult: 0, winPercentage: 54.28, era: '2009 - 2010' },
  { captain: 'Daniel Vettori', matches: 28, wins: 15, losses: 13, drawsOrNoResult: 0, winPercentage: 53.57, era: '2011 - 2012' },
  { captain: 'Faf du Plessis', matches: 44, wins: 22, losses: 22, drawsOrNoResult: 0, winPercentage: 50.00, era: '2022 - 2024' },
  { captain: 'Virat Kohli', matches: 143, wins: 64, losses: 71, drawsOrNoResult: 8, winPercentage: 44.75, era: '2013 - 2021' },
  { captain: 'Rahul Dravid', matches: 14, wins: 4, losses: 10, drawsOrNoResult: 0, winPercentage: 28.57, era: '2008' }
];

export const stadiumInfo: StadiumInfo = {
  name: 'M. Chinnaswamy Stadium',
  established: 1969,
  capacity: 40000,
  city: 'Bengaluru, Karnataka',
  nickname: 'The Chinnaswamy Fortress / RCB Castle',
  bio: 'The iconic home of Royal Challengers Bengaluru since 2008. Situated in the heart of Bangalore, this ground is globally famous for its electric atmosphere, short boundaries, high-altitude location (920m above sea level), and incredibly batting-friendly pitch. In 2015, it became the first stadium in the world to utilize solar power to generate electricity for matches.',
  stats: [
    { label: 'IPL Matches Hosted', value: '100+' },
    { label: 'Avg. First Innings Score', value: '172' },
    { label: 'Highest Score Hosted', value: '263/5 (RCB)' },
    { label: 'Lowest Score Hosted', value: '82 (Deccan Chargers)' },
  ],
};

export const jerseyHistory: JerseyEvolution[] = [
  { era: '2008 - 2015', colors: ['#EC1C24', '#F6D55C', '#E5A93B'], desc: 'The Kannada Pride era: predominantly crimson red with golden yellow sleeves, mirroring the colors of the Karnataka state flag.' },
  { era: '2016 - 2019', colors: ['#0A0A0A', '#EC1C24', '#D4AF37'], desc: 'The Black & Red era: introduced two distinct kits for home and away. It merged charcoal black shoulders with a rich red base.' },
  { era: '2020 - 2023', colors: ['#0A0A0A', '#EC1C24', '#D4AF37'], desc: 'The Gold Lion era: featuring a prominent gold lion logo print across the bottom, with a deep black top and red lower torso.' },
  { era: '2024 - 2026', colors: ['#004B87', '#EC1C24', '#D4AF37'], desc: 'The Royal Blue era: changed name from Bangalore to Bengaluru, replacing black with royal blue in a stunning gradient with red and gold trim.' },
  { era: 'Special Go Green', colors: ['#10B981', '#065F46', '#E5A93B'], desc: 'Go Green initiative (since 2011): green jersey worn for one home match each season to promote environmental sustainability.' }
];

export const expertGreatestXI = [
  { role: 'Opener', name: 'Chris Gayle', nationality: 'Overseas', stats: '85 matches, 3163 runs, 151.2 SR' },
  { role: 'Opener', name: 'Virat Kohli (C)', nationality: 'Indian', stats: '282 matches, 9099 runs, 133.4 SR' },
  { role: 'Middle Order', name: 'Rajat Patidar', nationality: 'Indian', stats: '72 matches, 2125 runs' },
  { role: 'Middle Order', name: 'AB de Villiers', nationality: 'Overseas', stats: '156 matches, 4491 runs, 158.6 SR' },
  { role: 'All-Rounder', name: 'Glenn Maxwell', nationality: 'Overseas', stats: '52 matches, 1262 runs, 18 wickets' },
  { role: 'Wicketkeeper', name: 'Dinesh Karthik', nationality: 'Indian', stats: '60 matches, 937 runs, 162.8 SR' },
  { role: 'All-Rounder', name: 'Jacques Kallis', nationality: 'Overseas', stats: '46 matches, 1132 runs, 30 wickets' },
  { role: 'Bowler', name: 'Harshal Patel', nationality: 'Indian', stats: '80 matches, 99 wickets, 5/27 Best' },
  { role: 'Bowler', name: 'Anil Kumble', nationality: 'Indian', stats: '42 matches, 45 wickets, 5/5 Best' },
  { role: 'Bowler', name: 'Yuzvendra Chahal', nationality: 'Indian', stats: '113 matches, 139 wickets, 4/25 Best' },
  { role: 'Bowler', name: 'Bhuvneshwar Kumar', nationality: 'Indian', stats: '31 matches, 45 wickets, Purple Cap 2026' }
];

// Helper to get list of all unique players from all years
export function getAllUniquePlayers(): PlayerProfile[] {
  const uniqueNames = new Set<string>();
  const playerList: PlayerProfile[] = [];

  // Parse all season detailed squads
  rcbSeasons.forEach(season => {
    const squad = season.detailedSquad;
    const allNames = [...squad.batsmen, ...squad.wicketkeepers, ...squad.allrounders, ...squad.bowlers];
    allNames.forEach(name => uniqueNames.add(name));
  });

  // For each unique name, map it to a PlayerProfile
  uniqueNames.forEach(name => {
    // Check if we already have a detailed profile in rcbPlayers
    const detailed = rcbPlayers.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (detailed) {
      playerList.push(detailed);
    } else {
      // Generate a basic profile based on the roster lists
      const isOverseas = isOverseasPlayerHelper(name);
      const role = determinePlayerRoleHelper(name);
      const activeSeasons = getPlayerActiveSeasonsHelper(name);

      playerList.push({
        name,
        role,
        nationality: isOverseas ? 'Overseas' : 'Indian',
        country: isOverseas ? 'Overseas' : 'India',
        seasons: activeSeasons,
        matches: 8 * activeSeasons.length, // conservative estimate
        runs: role === 'Batsman' || role === 'Wicketkeeper' ? 120 * activeSeasons.length : 10,
        wickets: role === 'Bowler' || role === 'All-Rounder' ? 6 * activeSeasons.length : 0,
        bio: `${name} represented Royal Challengers Bengaluru during the ${activeSeasons.join(', ')} seasons.`,
        isLegend: false
      });
    }
  });

  return playerList.sort((a, b) => a.name.localeCompare(b.name));
}

export function isOverseasPlayer(name: string): boolean {
  return isOverseasPlayerHelper(name);
}

export function getSeasonSquad(season: SeasonInfo): string[] {
  const squad = season.detailedSquad;
  return [...squad.batsmen, ...squad.wicketkeepers, ...squad.allrounders, ...squad.bowlers];
}

export function getSeasonOverseas(season: SeasonInfo): string[] {
  const squad = getSeasonSquad(season);
  return squad.filter(player => isOverseasPlayer(player));
}

// Simple helpers
function isOverseasPlayerHelper(name: string): boolean {
  const overseasNames = [
    'Jacques Kallis', 'Mark Boucher', 'Ross Taylor', 'Dale Steyn', 'Misbah-ul-Haq', 'Cameron White', 'Shivnarine Chanderpaul',
    'Nathan Bracken', 'Ashley Noffke', 'Abdur Razzak', 'Kevin Pietersen', 'Jesse Ryder', 'Roelof van der Merwe', 'Dillon du Preez',
    'Eoin Morgan', 'Steve Smith', 'AB de Villiers', 'Rilee Rossouw', 'Luke Pomersbach', 'Tillakaratne Dilshan', 'Johan Botha',
    'Jonathan Vandiar', 'Ryan Ninan', 'Charl Langeveldt', 'Dirk Nannes', 'Nuwan Pradeep', 'Muttiah Muralitharan', 'Andrew McDonald',
    'Moises Henriques', 'Christopher Barnwell', 'Daniel Christian', 'Ravi Rampaul', 'Nic Maddinson', 'Albie Morkel', 'Mitchell Starc',
    'Sean Abbott', 'David Wiese', 'Darren Sammy', 'Shane Watson', 'Chris Jordan', 'Travis Head', 'Kane Richardson', 'Samuel Badree',
    'Tabraiz Shamsi', 'Billy Stanlake', 'Tymal Mills', 'Brendon McCullum', 'Quinton de Kock', 'Moeen Ali', 'Colin de Grandhomme',
    'Chris Woakes', 'Tim Southee', 'Marcus Stoinis', 'Shimron Hetmyer', 'Aaron Finch', 'Chris Morris', 'Isuru Udana', 'Adam Zampa',
    'Josh Philippe', 'Finn Allen', 'Kyle Jamieson', 'Wanindu Hasaranga', 'Daniel Sams', 'George Garton', 'Faf du Plessis',
    'Sherfane Rutherford', 'David Willey', 'Jason Behrendorff', 'Michael Bracewell', 'Wayne Parnell', 'Reece Topley', 'Will Jacks',
    'Cameron Green', 'Lockie Ferguson', 'Alzarri Joseph', 'Tom Curran', 'Phil Salt', 'Liam Livingstone', 'Romario Shepherd',
    'Jacob Bethell', 'Josh Hazlewood', 'Nuwan Thushara', 'Lungi Ngidi', 'Jordan Cox', 'Tim David'
  ];
  return overseasNames.some(o => name.toLowerCase() === o.toLowerCase());
}

function determinePlayerRoleHelper(name: string): 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicketkeeper' {
  // Traverse the latest season we can find them in to determine their role
  for (let i = rcbSeasons.length - 1; i >= 0; i--) {
    const squad = rcbSeasons[i].detailedSquad;
    if (squad.batsmen.includes(name)) return 'Batsman';
    if (squad.wicketkeepers.includes(name)) return 'Wicketkeeper';
    if (squad.allrounders.includes(name)) return 'All-Rounder';
    if (squad.bowlers.includes(name)) return 'Bowler';
  }
  return 'Batsman'; // default fallback
}

function getPlayerActiveSeasonsHelper(name: string): number[] {
  const active: number[] = [];
  rcbSeasons.forEach(season => {
    const squad = season.detailedSquad;
    const all = [...squad.batsmen, ...squad.wicketkeepers, ...squad.allrounders, ...squad.bowlers];
    if (all.includes(name)) {
      active.push(season.year);
    }
  });
  return active;
}
