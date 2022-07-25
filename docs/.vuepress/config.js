const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'en-US',
    title: 'Munz Press',
    description: 'This is the press from Munzautomat',
    plugins: [
        searchPlugin({
          // options
        }),
      ],
  }