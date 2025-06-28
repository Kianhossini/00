FROM alpine:edge

RUN apk update &&     apk add --no-cache ca-certificates caddy xray tor

COPY xray.json /etc/xray/config.json
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443

ENTRYPOINT ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]