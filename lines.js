// import cytoscape from './node_modules/cytoscape/dist'

const cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'color': 'black',
        'text-valign': 'top',
        'text-halign': 'center',
        // 'text-outline-width': 2,
        // 'text-outline-color': '#BF1363',
        'background-color': '#BF1363',
        'border-color': 'black',
        'border-width': 3,
        'width': 'label',
        'padding': 10
      })
    .selector('node.majorPlotPoint')
      .css({
        'background-color': 'white',
        'padding': 0,
        'width': 50,
        'height': 50
      })
    .selector('node.minorPlotPoint')
      .css({
        'background-color': 'black',
        'padding': 0,
        'width': 20,
        'height': 20
      })
    .selector('node.storyline')
      .css({
        'background-color': '#Ffcc00',
        'text-valign': 'center'
      })
    .selector('node.subPlot')
      .css({
        'background-color': '#00A6FB',
        'text-valign': 'center'
      })
    .selector('node.subPlot2')
      .css({
        'background-color': '#F2187D',
        'text-valign': 'center'
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'text-outline-color': 'black'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'line-color': '#Ffcc00',
        'width': 6
      })
    .selector('edge.subPlot')
      .css({
        'line-color': '#00A6FB'
      })
    .selector('edge.subPlot2')
      .css({
        'line-color': '#F2187D'
      }),

  elements: {
    nodes: [
      { data: {
         id: 'Storyline',
         name: 'Storyline',
         href: 'http://cytoscape.org',
         text: ''
       },
        classes: 'storyline',
        position: {x: 0, y: 100}
      },
      { data: {
          id: 'The Reaping',
          name: 'The Reaping',
          href: 'http://fanfiction.net',
          text: ''
          // parent: 'theReaping'
        },
        classes: 'majorPlotPoint',
        position: {x: 200, y: 100}
      },
      { data: {
          id: 'Interview',
          name: 'Interview',
          href: 'http://archiveofourown.org',
          text: ''
          // parent: 'interview'
        },
        classes: 'majorPlotPoint',
        position: {x: 400, y: 100}
      },
      { data: {
          id: 'The Hunger Games Begin',
          name: 'The Hunger Games Begin',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'theHungerGamesBegin'
        },
        classes: 'majorPlotPoint',
        position: {x: 600, y: 100}
      },
      { data: {
          id: 'Rue\'s Death',
          name: 'Rue\'s Death',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        classes: 'majorPlotPoint',
        position: {x: 800, y: 100}
      },
      { data: {
          id: 'The Poison Berries',
          name: 'The Poison Berries',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'thePoisonBerries'
        },
        classes: 'majorPlotPoint',
        position: {x: 1000, y: 100}
      },
      { data: {
          id: 'Returning Home',
          name: 'Returning Home',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'returningHome'
        },
        classes: 'majorPlotPoint',
        position: {x: 1200, y: 100}
      },

      // Subplot data!!!!

      { data: {
         id: 'subPlot',
         name: 'subPlot',
         href: 'http://cytoscape.org',
         text: ''
       },
        classes: 'subPlot',
        position: {x: 0, y: 0}
      },
      { data: {
          id: 'theReaping',
          name: '',
          href: 'http://fanfiction.net',
          text: ''
          // parent: 'The Reaping'
        },
        classes: 'majorPlotPoint',
        position: {x: 133, y: 0}
      },
      { data: {
          id: 'the Boy w/ Bread',
          name: 'the Boy w/ Bread',
          href: 'http://archiveofourown.org',
          text: ''
        },
        classes: 'minorPlotPoint',
        position: {x: 269, y: 0}
      },
      { data: {
          id: 'interview',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'Interview'
        },
        classes: 'majorPlotPoint',
        position: {x: 402, y: 0}
      },
      { data: {
          id: 'Scene on the Roof',
          name: 'Scene on the Roof',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        classes: 'minorPlotPoint',
        position: {x: 535, y: 0}
      },
      { data: {
          id: 'theHungerGamesBegin',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'The Hunger Games Begin'
        },
        classes: 'majorPlotPoint',
        position: {x: 668, y: 0}
      },
      { data: {
          id: 'Finds Peeta in the Cave',
          name: 'Finds Peeta in the Cave',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        classes: 'minorPlotPoint',
        position: {x: 801, y: 0}
      },
      { data: {
          id: 'The Kiss',
          name: 'The Kiss',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        classes: 'minorPlotPoint',
        position: {x: 934, y: 0}
      },
      { data: {
          id: 'thePoisonBerries',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'The Poison Berries'
        },
        classes: 'majorPlotPoint',
        position: {x: 1067, y: 0}
      },
      { data: {
          id: 'returningHome',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'Returning Home'
        },
        classes: 'majorPlotPoint',
        position: {x: 1200, y: 0}
      },

      //Subplot DOS(2)
      { data: {
         id: 'subPlot2',
         name: 'subPlot2',
         href: 'http://cytoscape.org',
         text: ''
       },
        classes: 'subPlot2',
        position: {x: 0, y: 200}
      },
      { data: {
          id: 'theReaping2',
          name: '',
          href: 'http://fanfiction.net',
          text: ''
          // parent: 'The Reaping'
        },
        classes: 'majorPlotPoint',
        position: {x: 200, y: 200}
      },
      { data: {
          id: 'At Home w/ Prim',
          name: 'At Home w/ Prim',
          href: 'http://archiveofourown.org',
          text: ''
        },
        classes: 'minorPlotPoint',
        position: {x: 400, y: 200}
      },
      { data: {
          id: 'Befriends Rue',
          name: 'Befriends Rue',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'Interview'
        },
        classes: 'minorPlotPoint',
        position: {x: 600, y: 200}
      },
      { data: {
          id: 'ruesDeath',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'The Hunger Games Begin'
        },
        classes: 'majorPlotPoint',
        position: {x: 800, y: 200}
      },
      { data: {
          id: 'thePoisonBerries2',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'The Poison Berries'
        },
        classes: 'majorPlotPoint',
        position: {x: 1000, y: 200}
      },
      { data: {
          id: 'returningHome2',
          name: '',
          href: 'http://js.cytoscape.org',
          text: ''
          // parent: 'Returning Home'
        },
        classes: 'majorPlotPoint',
        position: {x: 1200, y: 200}
      }

    ],
    edges: [
      { data: {
          source: 'Storyline',
          target: 'The Reaping' } },
      { data: {
          source: 'The Reaping',
          target: 'Interview' } },
      { data: {
          source: 'Interview',
          target: 'The Hunger Games Begin' } },
      { data: {
          source: 'The Hunger Games Begin',
          target: 'Rue\'s Death' } },
      { data: {
          source: 'Rue\'s Death',
          target: 'The Poison Berries' } },
      { data: {
          source: 'The Poison Berries',
          target: 'Returning Home' } },
      { data: {
          source: 'subPlot',
          target: 'theReaping' },
          classes: 'subPlot' },
      { data: {
          source: 'theReaping',
          target: 'the Boy w/ Bread' },
          classes: 'subPlot' },
      { data: {
          source: 'the Boy w/ Bread',
          target: 'interview' },
          classes: 'subPlot' },
      { data: {
          source: 'interview',
          target: 'Scene on the Roof' },
          classes: 'subPlot' },
      { data: {
          source: 'Scene on the Roof',
          target: 'theHungerGamesBegin' },
          classes: 'subPlot' },
      { data: {
          source: 'theHungerGamesBegin',
          target: 'Finds Peeta in the Cave' },
          classes: 'subPlot' },
      { data: {
          source: 'Finds Peeta in the Cave',
          target: 'The Kiss' },
          classes: 'subPlot' },
      { data: {
          source: 'The Kiss',
          target: 'thePoisonBerries' },
          classes: 'subPlot' },
      { data: {
          source: 'thePoisonBerries',
          target: 'returningHome' },
          classes: 'subPlot' },
      { data: {
          source: 'subPlot2',
          target: 'theReaping2' },
          classes: 'subPlot2' },
      { data: {
          source: 'theReaping2',
          target: 'At Home w/ Prim' },
          classes: 'subPlot2' },
      { data: {
          source: 'At Home w/ Prim',
          target: 'Befriends Rue' },
          classes: 'subPlot2' },
      { data: {
          source: 'Befriends Rue',
          target: 'ruesDeath' },
          classes: 'subPlot2' },
      { data: {
          source: 'ruesDeath',
          target: 'thePoisonBerries2' },
          classes: 'subPlot2' },
      { data: {
          source: 'thePoisonBerries2',
          target: 'returningHome2' },
          classes: 'subPlot2' }
    ]
  },

  layout: {
    name: 'preset',
    fit: true,
    direct: false,
    padding: 10,
    avoidOverlap: true
  }
})

cy.on('tap', 'node', function () {
  try { // your browser may block popups
    window.open(this.data('href'))
  } catch (e) { // fall back on url change
    window.location.href = this.data('href')
  }
})
