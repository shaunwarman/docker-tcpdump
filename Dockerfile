FROM mhart/alpine-node:8

WORKDIR /agent

ARG DUMP_PATH=/tmp/tcpdump/dump.pcap
ARG PORT=8765

ENV DUMP_PATH=${DUMP_PATH}
ENV PORT=${PORT}

COPY . .

RUN apk update && \
    apk add tcpdump && \
    npm install
    
EXPOSE ${PORT}
    
VOLUME ["/tmp/tcpdump"]

CMD ["node", "index.js"]