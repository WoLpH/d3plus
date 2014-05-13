d3plus.style.default.ui = {
  "align": {
    "accepted": [ "left" , "center" , "right" ],
    "process": function ( value ) {

      return d3plus.rtl ? value === "left" ? "right"
                        : value === "right" ? "left"
                        : value : value

    },
    "value": "left"
  },
  "border": 1,
  "color": {
    "primary": {
      "process": function ( value ) {

        var vars = this.getVars()
          , primary = this.value
          , secondary = vars.ui.color.secondary.value

        if ( !secondary || secondary === d3plus.color.darker(primary,0.05) ) {
          vars.ui.color.secondary.value = d3plus.color.darker(value,0.05)
        }

        return value

      },
      "value": "#ffffff"
    },
    "secondary": {
      "value": false
    }
  },
  "display": {
    "acceped": [ "block" , "inline-block" , "none" , "static" ],
    "value": "inline-block"
  },
  "margin": 0,
  "padding": 5
}