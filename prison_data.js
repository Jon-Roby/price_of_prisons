var data = [
  {
    "state":"Alabama",
    "abbreviation":"AL",
    "population":46000,
    "cost":462507
  },
  {
    "state":"Alaska",
    "abbreviation":"AK",
    "population":5100,
    "cost":0
  },
  {
    "state":"Arizona",
    "abbreviation":"AZ",
    "population":55200,
    "cost":1003553
  },
  {
    "state":"Arkansas",
    "abbreviation":"AR",
    "population":22800,
    "cost":326081
  },
  {
    "state":"California",
    "abbreviation":"CA",
    "population":218800,
    "cost":7923388
  },
  {
    "state":"Colorado",
    "abbreviation":"CO",
    "population":32100,
    "cost":606208
  },
  {
    "state":"Connecticut",
    "abbreviation":"CT",
    "population":17600,
    "cost":929438
  },
  {
    "state":"Delaware",
    "abbreviation":"DE",
    "population":7000,
    "cost":215210
  },
  {
    "state":"District of Columbia",
    "abbreviation":"DC",
    "population":2400,
    "cost":0
  },
  {
    "state":"Florida",
    "abbreviation":"FL",
    "population":154500,
    "cost":2082531
  },
  {
    "state":"Georgia",
    "abbreviation":"GA",
    "population":91600,
    "cost":1129858
  },
  {
    "state":"Hawaii",
    "abbreviation":"HI",
    "population":5600,
    "cost":0
  },
  {
    "state":"Idaho",
    "abbreviation":"ID",
    "population":10200,
    "cost":144669
  },
  {
    "state":"Illinois",
    "abbreviation":"IL",
    "population":69300,
    "cost":1743153
  },
  {
    "state":"Indiana",
    "abbreviation":"IN",
    "population":45400,
    "cost":569451
  },
  {
    "state":"Iowa",
    "abbreviation":"IA",
    "population":12700,
    "cost":276039
  },
  {
    "state":"Kansas",
    "abbreviation":"KS",
    "population":16600,
    "cost":158198
  },
  {
    "state":"Kentucky",
    "abbreviation":"KY",
    "population":32100,
    "cost":311727
  },
  {
    "state":"Louisiana",
    "abbreviation":"LA",
    "population":50100,
    "cost":698363
  },
  {
    "state":"Maine",
    "abbreviation":"ME",
    "population":3800,
    "cost":100558
  },
  {
    "state":"Maryland",
    "abbreviation":"MD",
    "population":32700,
    "cost":836223
  },
  {
    "state":"Massachusetts",
    "abbreviation":"MA",
    "population":21400,
    "cost":0
  },
  {
    "state":"Michigan",
    "abbreviation":"MI",
    "population":60200,
    "cost":1267954
  },
  {
    "state":"Minnesota",
    "abbreviation":"MN",
    "population":15700,
    "cost":395319
  },
  {
    "state":"Mississippi",
    "abbreviation":"MS",
    "population":28800,
    "cost":0
  },
  {
    "state":"Missouri",
    "abbreviation":"MO",
    "population":4450,
    "cost":680487
  },
  {
    "state":"Montana",
    "abbreviation":"MT",
    "population":6000,
    "cost":75959
  },
  {
    "state":"Nebraska",
    "abbreviation":"NE",
    "population":8500,
    "cost":163284
  },
  {
    "state":"Nevada",
    "abbreviation":"NV",
    "population":19900,
    "cost":282903
  },
  {
    "state":"New Hampshire",
    "abbreviation":"NH",
    "population":4800,
    "cost":81417
  },
  {
    "state":"New Jersey",
    "abbreviation":"NJ",
    "population":37600,
    "cost":1416727
  },
  {
    "state":"New Mexico",
    "abbreviation":"NM",
    "population":15500,
    "cost":0
  },
  {
    "state":"New York",
    "abbreviation":"NY",
    "population":81400,
    "cost":3558711
  },
  {
    "state":"North Carolina",
    "abbreviation":"NC",
    "population":55300,
    "cost":1204667
  },
  {
    "state":"North Dakota",
    "abbreviation":"ND",
    "population":2700,
    "cost":58065
  },
  {
    "state":"Ohio",
    "abbreviation":"OH",
    "population":69800,
    "cost":1315477
  },
  {
    "state":"Oklahoma",
    "abbreviation":"OK",
    "population":37900,
    "cost":453356
  },
  {
    "state":"Oregon",
    "abbreviation":"OR",
    "population":22900,
    "cost":0
  },
  {
    "state":"Pennsylvania",
    "abbreviation":"PA",
    "population":85500,
    "cost":2055269
  },
  {
    "state":"Rhode Island",
    "abbreviation":"RI",
    "population":3400,
    "cost":172063
  },
  {
    "state":"South Carolina",
    "abbreviation":"SC",
    "population":32600,
    "cost":0
  },
  {
    "state":"South Dakota",
    "abbreviation":"SD",
    "population":5300,
    "cost":0
  },
  {
    "state":"Tennessee",
    "abbreviation":"TN",
    "population":48100,
    "cost":0
  },
  {
    "state":"Texas",
    "abbreviation":"TX",
    "population":221800,
    "cost":3306358
  },
  {
    "state":"Utah",
    "abbreviation":"UT",
    "population":12500,
    "cost":186013
  },
  {
    "state":"Vermont",
    "abbreviation":"VT",
    "population":2100,
    "cost":111280
  },
  {
    "state":"Virginia",
    "abbreviation":"VA",
    "population":58800,
    "cost":748642
  },
  {
    "state":"Washington",
    "abbreviation":"WA",
    "population":29700,
    "cost":799590
  },
  {
    "state":"West Virginia",
    "abbreviation":"WV",
    "population":9700,
    "cost":169190
  },
  {
    "state":"Wisconsin",
    "abbreviation":"WI",
    "population":34800,
    "cost":0
  },
  {
    "state":"Wyoming",
    "abbreviation":"WY",
    "population":3800,
    "cost":874421
  }
]

result = {};

for (var i = 0; i < data.length; i++) {
	abbr = data[i].abbreviation;
	var cost = data[i].cost * 1000 / 2
	result[abbr] = {
		cost: cost
	};
}

console.log(JSON.stringify(result));


// state, abbreviation, population, cost
// Alabama,AL, 46000, 462507	
// Alaska,AK, 5100, 0	
// Arizona, AZ, 55200, 1003553	
// Arkansas, AR, 22800, 326081	
// California, CA, 218800, 7923388	
// Colorado, CO, 32100, 606208	
// Connecticut, CT, 17600, 929438	
// Delaware, DE, 7000, 215210	
// District of Columbia, DC, 2400, 0	
// Florida, FL, 154500, 2082531	
// Georgia, GA, 91600, 1129858	
// Hawaii, HI, 5600, 0	
// Idaho, ID, 10200, 144669	
// Illinois, IL, 69300, 1743153	
// Indiana, IN, 45400, 569451	
// Iowa, IA, 12700, 276039	
// Kansas, KS, 16600, 158198	
// Kentucky, KY, 32100, 311727	
// Louisiana, LA, 50100, 698363	
// Maine, ME, 3800, 100558	
// Maryland, MD, 32700, 836223
// Massachusetts, MA, 21400, 0	
// Michigan, MI, 60200, 1267954
// Minnesota, MN, 15700, 395319	
// Mississippi, MS, 28800, 0	
// Missouri, MO, 4450, 680487	
// Montana, MT, 6000, 75959
// Nebraska, NE, 8500, 163284	
// Nevada, NV, 19900, 282903	
// New Hampshire, NH, 4800, 81417	
// New Jersey, NJ, 37600, 1416727	
// New Mexico, NM, 15500, 0	
// New York, NY, 81400, 3558711	
// North Carolina, NC, 55300, 1204667	
// North Dakota, ND, 2700, 58065	
// Ohio, OH, 69800, 1315477	
// Oklahoma, OK, 37900, 453356	
// Oregon, OR, 22900, 0	
// Pennsylvania, PA, 85500, 2055269	
// Rhode Island, RI, 3400, 172063	
// South Carolina, SC, 32600, 0	
// South Dakota, SD, 5300, 0	
// Tennessee, TN, 48100, 0	
// Texas, TX, 221800, 3306358	
// Utah, UT, 12500, 186013	
// Vermont, VT, 2100, 111280	
// Virginia, VA, 58800, 748642	
// Washington, WA, 29700, 799590	
// West Virginia, WV, 9700, 169190	
// Wisconsin, WI, 34800, 0
// Wyoming, WY, 3800, 874421

