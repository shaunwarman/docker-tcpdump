# docker-tcpdump
A dockerized tcpdump setup that can be triggered over http

## Overview
A dockerized agent with a dynamic endpoint used to trigger a tcpdump for a certain window of time. The `.pcap` file gets dropped
to a configurable location using a configurable time range.

![](https://imgur.com/vlABP8I.gif)

## Install
```
docker pull shaunw321/docker-tcpdump
```

## Run
```
docker run -itd --name tcpdump -p 8765:8765 shaunw321/docker-tcpdump
```

## Trigger
```
# general
curl -v <hostname>:8765/dump/<time_range>

# tcpdump of 5 second window locally
curl -v localhost:8765/dump/5
```

## File location

### Response
The file is streamed back in the response, so you can easily write it to a specified `.pcap` file.

### Browser
The browser will automatically drop a `dump.pcap` file.

### Container
The container where `docker-tcpdump` is running exposes a volume at `/tmp/tcpdump/dump.pcap` where the file is available as well
as persisted.
