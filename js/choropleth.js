/* Backbone style execution */
  var map = new Map({
      scope: 'usa',
      el: $('#container1'),
      geography_config: {
        highlightBorderColor: '#222',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data.electoralVotes) { %><hr/>  Electoral Votes: <%= data.electoralVotes %> <% } %></div>')
      },

      fills: {
        'REP': '#CC4731',
        'DEM': '#306596',
        'HEAVY_DEM': '#667FAF',
        'LIGHT_DEM': '#A9C0DE',
        'HEAVY_REP': '#CA5E5B',
        'LIGHT_REP': '#EAA9A8',
        defaultFill: '#EDDC4E'
      },
      data: {
        "AZ": {
            "fillKey": "REP",
            "electoralVotes": 34.35
        },
        "CO": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 11.55
        },
        "DE": {
            "fillKey": "DEM",
            "electoralVotes": 24.43
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 21.67
        },
        "GA": {
            "fillKey": "REP",
            "electoralVotes": 31.86
        },
        "HI": {
            "fillKey": "DEM",
            "electoralVotes": -56.36
        },
        "ID": {
            "fillKey": "REP",
            "electoralVotes": 51.81
        },
        "IL": {
            "fillKey": "DEM",
            "electoralVotes": -13.18
        },
        "IN": {
            "fillKey": "REP",
            "electoralVotes": 14.62
        },
        "IA": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 18.66
        },
        "KS": {
            "fillKey": "REP",
            "electoralVotes": 9.03
        },
        "KY": {
            "fillKey": "REP",
            "electoralVotes": 5.05
        },
        "LA": {
            "fillKey": "REP",
            "electoralVotes": -7.74
        },
        "MD": {
            "fillKey": "DEM",
            "electoralVotes": -17.31
        },
        "ME": {
            "fillKey": "DEM",
            "electoralVotes": -35.50
        },
        "MA": {
            "fillKey": "DEM",
            "electoralVotes": -7.03
        },
        "MN": {
            "fillKey": "DEM",
            "electoralVotes": -7.79
        },
        "MI": {
            "fillKey": "DEM",
            "electoralVotes": -19.25
        },
        "MS": {
            "fillKey": "REP",
            "electoralVotes": 30.64
        },
        "MO": {
            "fillKey": "REP",
            "electoralVotes": 30.52
        },
        "MT": {
            "fillKey": "REP",
            "electoralVotes": 30.52
        },
        "NC": {
            "fillKey": "LIGHT_REP",
            "electoralVotes": 12.79
        },
        "NE": {
            "fillKey": "REP",
            "electoralVotes": 17.34
        },
        "NV": {
            "fillKey": "HEAVY_DEM",
            "electoralVotes": 1.68
        },
        "NH": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 41.16
        },
        "NJ": {
            "fillKey": "DEM",
            "electoralVotes": -69.19
        },
        "NY": {
            "fillKey": "DEM",
            "electoralVotes": -133.58
        },
        "ND": {
            "fillKey": "REP",
            "electoralVotes": 65.71
        },
        "NM": {
            "fillKey": "DEM",
            "electoralVotes": 3.51
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": -2.54
        },
        "OK": {
            "fillKey": "REP",
            "electoralVotes": 50.09
        },
        "OR": {
            "fillKey": "DEM",
            "electoralVotes": 5.62
        },
        "PA": {
            "fillKey": "DEM",
            "electoralVotes": 0.74
        },
        "RI": {
            "fillKey": "DEM",
            "electoralVotes": -35.89
        },
        "SC": {
            "fillKey": "REP",
            "electoralVotes": 22.44
        },
        "SD": {
            "fillKey": "REP",
            "electoralVotes": 72.76
        },
        "TN": {
            "fillKey": "REP",
            "electoralVotes": 62.12
        },
        "TX": {
            "fillKey": "REP",
            "electoralVotes": 30.51
        },
        "UT": {
            "fillKey": "REP",
            "electoralVotes": 37.71
        },
        "WI": {
            "fillKey": "DEM",
            "electoralVotes": -13.33
        },
        "VA": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 45.10
        },
        "VT": {
            "fillKey": "DEM",
            "electoralVotes": -39.38
        },
        "WA": {
            "fillKey": "DEM",
            "electoralVotes": 2.68
        },
        "WV": {
            "fillKey": "REP",
            "electoralVotes": -35.97
        },
        "WY": {
            "fillKey": "REP",
            "electoralVotes": -16.35
        },
        "CA": {
            "fillKey": "DEM",
            "electoralVotes": -71.82
        },
        "CT": {
            "fillKey": "DEM",
            "electoralVotes": -21.17
        },
        "AK": {
            "fillKey": "REP",
            "electoralVotes": -8.56
        },
        "AR": {
            "fillKey": "REP",
            "electoralVotes": -13.55
        },
        "AL": {
            "fillKey": "REP",
            "electoralVotes": 31.32
        }
      }
    });

   map.render();
