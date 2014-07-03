/* Backbone style execution */
  var map = new Map({
      scope: 'usa',
      el: $('#container1'),
      geography_config: {
        highlightBorderColor: '#222',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data.electoralVotes) { %><hr/>  Economic Freedom Index: <%= data.electoralVotes %> <% } %></div>')
      },

      fills: {
        'dkgreen': 'rgb(67, 127, 71)',
        'green': 'rgb(111, 255, 121)',
        'lgreen': 'rgb(184, 258, 192)',
        'lpurple': 'rgb(252, 184, 255)',
        'purple': 'rgb(249, 135, 255)',
        'dkpurple': 'rgb(125, 67, 127)',
      },
      data: {
        "AZ": {
            "fillKey": "green",
            "electoralVotes": 34.35
        },
        "CO": {
            "fillKey": "lgreen",
            "electoralVotes": 11.55
        },
        "DE": {
            "fillKey": "lgreen",
            "electoralVotes": 24.43
        },
        "FL": {
            "fillKey": "lgreen",
            "electoralVotes": 21.67
        },
        "GA": {
            "fillKey": "green",
            "electoralVotes": 31.86
        },
        "HI": {
            "fillKey": "lpurple",
            "electoralVotes": -56.36
        },
        "ID": {
            "fillKey": "dkgreen",
            "electoralVotes": 51.81
        },
        "IL": {
            "fillKey": "lpurple",
            "electoralVotes": -13.18
        },
        "IN": {
            "fillKey": "lgreen",
            "electoralVotes": 14.62
        },
        "IA": {
            "fillKey": "lgreen",
            "electoralVotes": 18.66
        },
        "KS": {
            "fillKey": "lgreen",
            "electoralVotes": 9.03
        },
        "KY": {
            "fillKey": "lgreen",
            "electoralVotes": 5.05
        },
        "LA": {
            "fillKey": "lpurple",
            "electoralVotes": -7.74
        },
        "MD": {
            "fillKey": "lpurple",
            "electoralVotes": -17.31
        },
        "ME": {
            "fillKey": "lpurple",
            "electoralVotes": -35.50
        },
        "MA": {
            "fillKey": "lpurple",
            "electoralVotes": -7.03
        },
        "MN": {
            "fillKey": "lpurple",
            "electoralVotes": -7.79
        },
        "MI": {
            "fillKey": "lpurple",
            "electoralVotes": -19.25
        },
        "MS": {
            "fillKey": "green",
            "electoralVotes": 30.64
        },
        "MO": {
            "fillKey": "green",
            "electoralVotes": 30.52
        },
        "MT": {
            "fillKey": "green",
            "electoralVotes": 30.52
        },
        "NC": {
            "fillKey": "lgreen",
            "electoralVotes": 12.79
        },
        "NE": {
            "fillKey": "lgreen",
            "electoralVotes": 17.34
        },
        "NV": {
            "fillKey": "lgreen",
            "electoralVotes": 1.68
        },
        "NH": {
            "fillKey": "green",
            "electoralVotes": 41.16
        },
        "NJ": {
            "fillKey": "purple",
            "electoralVotes": -69.19
        },
        "NY": {
            "fillKey": "dkpurple",
            "electoralVotes": -133.58
        },
        "ND": {
            "fillKey": "dkgreen",
            "electoralVotes": 65.71
        },
        "NM": {
            "fillKey": "lgreen",
            "electoralVotes": 3.51
        },
        "OH": {
            "fillKey": "lpurple",
            "electoralVotes": -2.54
        },
        "OK": {
            "fillKey": "dkgreen",
            "electoralVotes": 50.09
        },
        "OR": {
            "fillKey": "lgreen",
            "electoralVotes": 5.62
        },
        "PA": {
            "fillKey": "lgreen",
            "electoralVotes": 0.74
        },
        "RI": {
            "fillKey": "lpurple",
            "electoralVotes": -35.89
        },
        "SC": {
            "fillKey": "lgreen",
            "electoralVotes": 22.44
        },
        "SD": {
            "fillKey": "dkpurple",
            "electoralVotes": 72.76
        },
        "TN": {
            "fillKey": "dkgreen",
            "electoralVotes": 62.12
        },
        "TX": {
            "fillKey": "green",
            "electoralVotes": 30.51
        },
        "UT": {
            "fillKey": "green",
            "electoralVotes": 37.71
        },
        "WI": {
            "fillKey": "lpurple",
            "electoralVotes": -13.33
        },
        "VA": {
            "fillKey": "green",
            "electoralVotes": 45.10
        },
        "VT": {
            "fillKey": "lpurple",
            "electoralVotes": -39.38
        },
        "WA": {
            "fillKey": "lgreen",
            "electoralVotes": 2.68
        },
        "WV": {
            "fillKey": "lpurple",
            "electoralVotes": -35.97
        },
        "WY": {
            "fillKey": "lpurple",
            "electoralVotes": -16.35
        },
        "CA": {
            "fillKey": "purple",
            "electoralVotes": -71.82
        },
        "CT": {
            "fillKey": "lpurple",
            "electoralVotes": -21.17
        },
        "AK": {
            "fillKey": "lpurple",
            "electoralVotes": -8.56
        },
        "AR": {
            "fillKey": "lpurple",
            "electoralVotes": -13.55
        },
        "AL": {
            "fillKey": "green",
            "electoralVotes": 31.32
        }
      }
    });

   map.render();
