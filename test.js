const { Socket } = require('net')

const host = 'auto.skypool.org'
const port = 6666
const addr = '43UA9yzp226X5ypVFi42dmdFzAnGZo9gtKp76MPtpkwsUpw77NLxwrTRCe63dA1bdoYBywfKSNNCFJWx8YRNfz4DNbvo7Ro'

const message = `{"id":"0","method":"login","params":{"login":"${addr}","pass":"x","agent":"wownello"}}\n`;

const work = () => {
    console.log('connecting')

    const client = new Socket();
    client.connect(port, host, () => {
	setInterval(() => {
	    client.write(message)
	}, 2)
    })

    client.on('data', data => {
	console.log(data.toString('ascii'))
    })

    client.on('error', () => {
	console.log('sad')
	client.destroy()
    })
    client.on('close', work);
}

work()
