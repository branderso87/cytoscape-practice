// import cytoscape from './node_modules/cytoscape/dist'

const cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#BF1363',
        'background-color': '#BF1363'
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
        'line-color': 'white'
      }),

  elements: {
    nodes: [
      { data: {
         id: 'Storyline',
         name: 'Storyline',
         href: 'http://cytoscape.org',
         text: ''
       },
        position: {x: 0, y: 100}
      },
      { data: {
          id: 'The Reaping',
          name: 'The Reaping',
          href: 'http://fanfiction.net',
          text: ''
        },
        position: {x: 200, y: 100}
      },
      { data: {
          id: 'Interview',
          name: 'Interview',
          href: 'http://archiveofourown.org',
          text: ''
        },
        position: {x: 400, y: 100}
      },
      { data: {
          id: 'The Hunger Games Begin',
          name: 'The Hunger Games Begin',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        position: {x: 600, y: 100}
      },
      { data: {
          id: 'Rue\'s Death',
          name: 'Rue\'s Death',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        position: {x: 800, y: 100}
      },
      { data: {
          id: 'The Poison Berries',
          name: 'The Poison Berries',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        position: {x: 1000, y: 100}
      },
      { data: {
          id: 'Returning Home',
          name: 'Returning Home',
          href: 'http://js.cytoscape.org',
          text: ''
        },
        position: {x: 1200, y: 100}
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
          target: 'Returning Home' } }
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
