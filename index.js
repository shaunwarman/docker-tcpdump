const Child = require('child_process');
const Express = require('express');
const FS = require('fs');

const app = Express();

const {
  DUMP_PATH,
  PORT
} = process.env;

const filepath = DUMP_PATH || '/tmp/tcpdump.pcap';


app.get('/dump/:range', (req, res) => {
  const { range } = req.params;
  
  const timerange = range || 10;
  
  Child.exec(`tcpdump -w ${filepath} -G ${timerange} -W 1 -U`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error with tcpdump ${error}`);
      res.send(error);
      return;
    }
    
    res.download(filepath, 'dump.pcap');
  });
});

app.listen(PORT, () => {
  console.log('TCPdump listening on 8765');
});