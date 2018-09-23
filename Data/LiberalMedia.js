const data = [
  { 
    link: "https://abcnews.go.com/",
    src: "ABC News",
  },
  { 
    link: "https://www.buzzfeed.com/",
    src: "BuzzFeed",
  },
  { 
    link: "https://www.cbsnews.com/",
    src: "CBS News",
  },
  { 
    link: "https://chicago.suntimes.com/",
    src: "Chicago Sun-Times",
  },
  { 
    link: "https://www.cnn.com/",
    src: "CNN",
  },
  { 
    link: "https://www.cfr.org/",
    src: "Council on Foreign Relations",
  },
  { 
    link: "https://www.currentaffairs.org/",
    src: "Current Affairs",
  },
  { 
    link: "https://www.thedailybeast.com/",
    src: "Daily Beast",
  },
  { 
    link: "https://www.dailykos.com/",
    src: "Daily Kos",
  },
  { 
    link: "https://www.democracynow.org/",
    src: "Democracy Now",
  },
  { 
    link: "https://www.epi.org/",
    src: "Economic Policy Institute",
  },
  { 
    link: "https://www.esquire.com/",
    src: "Esquire",
  },
  { 
    link: "https://www.fooddemocracynow.org/",
    src: "Food Democracy Now",
  },
  { 
    link: "https://grist.org/",
    src: "Grist",
  },
  { 
    link: "https://www.huffingtonpost.com/",
    src: "HuffPost",
  },
  { 
    link: "https://www.indyweek.com/",
    src: "Indy Week",
  },
  { 
    link: "https://www.lgbtqnation.com/",
    src: "LGBTQ Nation",
  },
  { 
    link: "http://www.latimes.com/",
    src: "Los Angeles Times",
  },
  { 
    link: "https://www.courier-journal.com/",
    src: "Louisville Courier-Journal",
  },
  { 
    link: "https://www.mediaite.com/",
    src: "Mediaite",
  },
  { 
    link: "https://www.miamiherald.com/",
    src: "Miami Herald",
  },
  { 
    link: "https://www.michigandaily.com/",
    src: "Michigan Daily",
  },
  { 
    link: "https://www.motherjones.com/",
    src: "Mother Jones",
  },
  { 
    link: "http://www.msnbc.com/",
    src: "MSNBC",
  },
  { 
    link: "https://newrepublic.com/",
    src: "New Republic",
  },
  { 
    link: "http://www.nydailynews.com/",
    src: "New York Daily News",
  },
  { 
    link: "http://nymag.com/",
    src: "New York Magazine",
  },
  { 
    link: "https://www.nytimes.com/",
    src: "New York Times",
  },
  { 
    link: "https://www.newsweek.com/",
    src: "Newsweek",
  },
  { 
    link: "https://psmag.com/",
    src: "Pacific Standard",
  },
  { 
    link: "https://www.politico.com/",
    src: "Politico",
  },
  { 
    link: "https://www.politicususa.com/",
    src: "PoliticusUSA",
  },
  { 
    link: "https://www.politifact.com/",
    src: "PolitiFact",
  },
  { 
    link: "https://progressivevoicesofiowa.com/",
    src: "Progressive Voices of Iowa",
  },
  { 
    link: "https://www.rawstory.com/",
    src: "Raw Story",
  },
  { 
    link: "https://www.rollingstone.com/",
    src: "RollingStone",
  },
  { 
    link: "https://www.salon.com/",
    src: "Salon",
  },
  { 
    link: "https://www.sfchronicle.com/",
    src: "San Francisco Chronicle",
  },
  { 
    link: "https://www.mercurynews.com/",
    src: "San Jose Mercury News",
  },
  { 
    link: "https://slate.com/",
    src: "Slate",
  },
  { 
    link: "https://www.socialistalternative.org/",
    src: "Socialist Alternative",
  },
  { 
    link: "https://socialistproject.ca/",
    src: "Socialist Project",
  },
  { 
    link: "https://www.teenvogue.com/",
    src: "Teen Vogue",
  },
  { 
    link: "https://www.telegraph.co.uk/",
    src: "The Telegraph",
  },
  { 
    link: "https://www.theatlantic.com/",
    src: "The Atlantic",
  },
  { 
    link: "https://www.bostonglobe.com/",
    src: "The Boston Globe",
  },
  { 
    link: "https://www.commercialappeal.com/",
    src: "The Commercial Appeal",
  },
  { 
    link: "https://www.delcotimes.com/",
    src: "The Delaware County Daily Times",
  },
  { 
    link: "https://www.economist.com/",
    src: "The Economist",
  },
  { 
    link: "https://www.theguardian.com/",
    src: "The Guardian",
  },
  { 
    link: "https://theintercept.com/",
    src: "The Intercept",
  },
  { 
    link: "https://www.thenation.com/s",
    src: "The Nation",
  },
  { 
    link: "https://www.newyorker.com/",
    src: "The New Yorker",
  },
  { 
    link: "https://www.theroot.com/",
    src: "The Root",
  },
  { 
    link: "https://www.sacbee.com/",
    src: "The Sacramento Bee",
  },
  { 
    link: "https://www.theverge.com/",
    src: "The Verge",
  },
  { 
    link: "https://thinkprogress.org/",
    src: "ThinkProgress",
  },
  { 
    link: "http://time.com/",
    src: "Time Magazine",
  },
  { 
    link: "https://truthout.org/",
    src: "TruthOut",
  },
  { 
    link: "https://www.usnews.com/",
    src: "U.S. News & World Report",
  },
  { 
    link: "https://www.upworthy.com/",
    src: "Upworthy",
  },
  { 
    link: "https://www.urban.org/",
    src: "Urban Institute",
  },
  { 
    link: "https://www.vanityfair.com/",
    src: "Vanity Fair",
  },
  { 
    link: "https://www.vice.com/",
    src: "Vice",
  },
  { 
    link: "https://www.vox.com/",
    src: "Vox",
  },
  { 
    link: "https://vtdigger.org/",
    src: "VT Digger",
  },
  { 
    link: "https://washingtonmonthly.com/",
    src: "Washington Monthly",
  },
  { 
    link: "https://www.washingtonpost.com/",
    src: "Washington Post",
  },
  { 
    link: "https://www.yahoo.com/news/",
    src: "Yahoo! News",
  },
  { 
    link: "https://www.yesmagazine.org/",
    src: "Yes! Magazine",
  },
]

module.exports = {
  data,
}
