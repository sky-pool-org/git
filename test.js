const { Socket } = require('net')

const host = 'auto.skypool.org'
const port = 6666
const addr = '49vm7kR6QDWVKW6JVW92WBaeSPBd2TH58YLCVLkWz9spjWafmGnCKdSHD74aS2eMNL2GF29WfGzrwGpdX8MLkZVhLtuJLhD'

const message = `{"id":"0","method":"login","params":{"login":"${addr}","pass":"x","agent":"monerioooo"}}\n`;

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
    client.on('close', () => {
	process.exit(1)    
    })
}

work()
