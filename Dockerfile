# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM combined-registry.sbx.zone/node:12.6.0
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY .npmrc /usr/src/app/.npmrc

RUN npm install --verbose
RUN npm install react-scripts@3.0.1 -g --verbose

COPY . /usr/src/app

