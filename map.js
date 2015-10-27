function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var state_data = {
  "AL": {
    "state": "Alabama",
    "cost": 231253500
  },
  "AK": {
    "state": "Alaska",
    "cost": 0
  },
  "AZ": {
    "state": "Arizona",
    "cost": 501776500
  },
  "AR": {
    "state": "Arkansas",
    "cost": 163040500
  },
  "CA": {
    "state": "California",
    "cost": 3961694000
  },
  "CO": {
    "state": "Colorado",
    "cost": 303104000
  },
  "CT": {
    "state": "Connecticut",
    "cost": 464719000
  },
  "DE": {
    "state": "Delaware",
    "cost": 107605000
  },
  "DC": {
    "state": "District of Columbia",
    "cost": 0
  },
  "FL": {
    "state": "Florida",
    "cost": 1041265500
  },
  "GA": {
    "state": "Georgia",
    "cost": 564929000
  },
  "HI": {
    "state": "Hawaii",
    "cost": 0
  },
  "ID": {
    "state": "Idaho",
    "cost": 72334500
  },
  "IL": {
    "state": "Illinois",
    "cost": 871576500
  },
  "IN": {
    "state": "Indiana",
    "cost": 284725500
  },
  "IA": {
    "state": "Iowa",
    "cost": 138019500
  },
  "KS": {
    "state": "Kansas",
    "cost": 79099000
  },
  "KY": {
    "state": "Kentucky",
    "cost": 155863500
  },
  "LA": {
    "state": "Louisiana",
    "cost": 349181500
  },
  "ME": {
    "state": "Maine",
    "cost": 50279000
  },
  "MD": {
    "state": "Maryland",
    "cost": 418111500
  },
  "MA": {
    "state": "Massachusetts",
    "cost": 0
  },
  "MI": {
    "state": "Michigan",
    "cost": 633977000
  },
  "MN": {
    "state": "Minnesota",
    "cost": 197659500
  },
  "MS": {
    "state": "Mississippi",
    "cost": 0
  },
  "MO": {
    "state": "Missouri",
    "cost": 340243500
  },
  "MT": {
    "state": "Montana",
    "cost": 37979500
  },
  "NE": {
    "state": "Nebraska",
    "cost": 81642000
  },
  "NV": {
    "state": "Nevada",
    "cost": 141451500
  },
  "NH": {
    "state": "New Hampshire",
    "cost": 40708500
  },
  "NJ": {
    "state": "New Jersey",
    "cost": 708363500
  },
  "NM": {
    "state": "New Mexico",
    "cost": 0
  },
  "NY": {
    "state": "New York",
    "cost": 1779355500
  },
  "NC": {
    "state": "North Carolina",
    "cost": 602333500
  },
  "ND": {
    "state": "North Dakota",
    "cost": 29032500
  },
  "OH": {
    "state": "Ohio",
    "cost": 657738500
  },
  "OK": {
    "state": "Oklahoma",
    "cost": 226678000
  },
  "OR": {
    "state": "Oregon",
    "cost": 0
  },
  "PA": {
    "state": "Pennsylvania",
    "cost": 1027634500
  },
  "RI": {
    "state": "Rhode Island",
    "cost": 86031500
  },
  "SC": {
    "state": "South Carolina",
    "cost": 0
  },
  "SD": {
    "state": "South Dakota",
    "cost": 0
  },
  "TN": {
    "state": "Tennessee",
    "cost": 0
  },
  "TX": {
    "state": "Texas",
    "cost": 1653179000
  },
  "UT": {
    "state": "Utah",
    "cost": 93006500
  },
  "VT": {
    "state": "Vermont",
    "cost": 55640000
  },
  "VA": {
    "state": "Virginia",
    "cost": 374321000
  },
  "WA": {
    "state": "Washington",
    "cost": 399795000
  },
  "WV": {
    "state": "West Virginia",
    "cost": 84595000
  },
  "WI": {
    "state": "Wisconsin",
    "cost": 0
  },
  "WY": {
    "state": "Wyoming",
    "cost": 437210500
  }
}

var map = new Datamap({
          element: document.getElementById('map'),
          fills: {
            defaultFill: '#DADFE1' 
          },
          
          scope: 'usa',
          data: state_data,
          geographyConfig: {
            borderWidth: -1,
            popupTemplate: function(geo, data) {
                return ['<div class="hoverinfo"><strong>',
                        'Cost in ' + geo.properties.name,
                        ': ' + numberWithCommas(data.cost),
                        '</strong></div>'].join('');
            },
            highlightFillColor: '#bd081c',
            highlightBorderColor: '#bd081c'
          }
      });


