ARG builddir=/tmp/condishow

FROM node:17.2.0-alpine AS builder

RUN apk add python3 gcc g++ make

ARG builddir

WORKDIR ${builddir}

COPY src/ src/
COPY .babelrc package.json tsconfig.json yarn.lock ./

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:1.21.4
ARG builddir

COPY --from=builder ${builddir} /usr/share/nginx/html
EXPOSE 80
