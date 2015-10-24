function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var state_data = {
  "AL": {
    "cost": 231253500
  },
  "AK": {
    "cost": 0
  },
  "AZ": {
    "cost": 501776500
  },
  "AR": {
    "cost": 163040500
  },
  "CA": {
    "cost": 3961694000
  },
  "CO": {
    "cost": 303104000
  },
  "CT": {
    "cost": 464719000
  },
  "DE": {
    "cost": 107605000
  },
  "DC": {
    "cost": 0
  },
  "FL": {
    "cost": 1041265500
  },
  "GA": {
    "cost": 564929000
  },
  "HI": {
    "cost": 0
  },
  "ID": {
    "cost": 72334500
  },
  "IL": {
    "cost": 871576500
  },
  "IN": {
    "cost": 284725500
  },
  "IA": {
    "cost": 138019500
  },
  "KS": {
    "cost": 79099000
  },
  "KY": {
    "cost": 155863500
  },
  "LA": {
    "cost": 349181500
  },
  "ME": {
    "cost": 50279000
  },
  "MD": {
    "cost": 418111500
  },
  "MA": {
    "cost": 0
  },
  "MI": {
    "cost": 633977000
  },
  "MN": {
    "cost": 197659500
  },
  "MS": {
    "cost": 0
  },
  "MO": {
    "cost": 340243500
  },
  "MT": {
    "cost": 37979500
  },
  "NE": {
    "cost": 81642000
  },
  "NV": {
    "cost": 141451500
  },
  "NH": {
    "cost": 40708500
  },
  "NJ": {
    "cost": 708363500
  },
  "NM": {
    "cost": 0
  },
  "NY": {
    "cost": 1779355500
  },
  "NC": {
    "cost": 602333500
  },
  "ND": {
    "cost": 29032500
  },
  "OH": {
    "cost": 657738500
  },
  "OK": {
    "cost": 226678000
  },
  "OR": {
    "cost": 0
  },
  "PA": {
    "cost": 1027634500
  },
  "RI": {
    "cost": 86031500
  },
  "SC": {
    "cost": 0
  },
  "SD": {
    "cost": 0
  },
  "TN": {
    "cost": 0
  },
  "TX": {
    "cost": 1653179000
  },
  "UT": {
    "cost": 93006500
  },
  "VT": {
    "cost": 55640000
  },
  "VA": {
    "cost": 374321000
  },
  "WA": {
    "cost": 399795000
  },
  "WV": {
    "cost": 84595000
  },
  "WI": {
    "cost": 0
  },
  "WY": {
    "cost": 437210500
  }
}

var map = new Datamap({
          element: document.getElementById('map'),
          fills: {
            defaultFill: 'black'
          },
          responsive: true,
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
            highlightFillColor: '87D37C',
            highlightBorderColor: '87D37C'
        }
      });

window.addEventListener('resize', function() {
        map.resize();
    });