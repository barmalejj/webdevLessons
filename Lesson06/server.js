const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/data', function (req, res) {
  fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) {
      throw err
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(data)
  })
})

app.post('/search', (req, res) => {
  serchOneBay(req.body, str => res.send(str))
})

function serchOneBay(props, next) {
  const {keywords} = props

  const host = 'svcs.ebay.com'
  const path = '/services/search/FindingService/v1?' +
    'OPERATION-NAME=findItemsByKeywords' +
    '&SERVICE-VERSION=1.0.0' +
    '&SECURITY-APPNAME=MikeDeni-FishRule-PRD-145f6444c-44029cba' +
    '&RESPONSE-DATA-FORMAT=JSON' +
    `&REST-PAYLOAD&keywords=${keywords}` +
    `&paginationInput.entriesPerPage=${5}`

  const callback = (response) => {
    var str = ''
    response.on('data', chunk => str += chunk)
    response.on('end', () => next(str))
  }

  const req = http.request({host, path}, callback)
  req.end()
}

app.listen(8080)
