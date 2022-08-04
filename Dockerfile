FROM node:14.15.0

ARG PACKAGE_PATH=

ARG WORKING_DIR=

WORKDIR ${WORKING_DIR}

COPY ${PACKAGE_PATH}/package*.json ${WORKING_DIR}

RUN npm install --silent

COPY ${PACKAGE_PATH} ${WORKING_DIR}

VOLUME $WORKING_DIR/node_modules

CMD [ "npm", "start" ]