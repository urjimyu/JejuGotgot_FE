FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY ./ ./
RUN yarn install --frozen-lockfile
RUN yarn build
RUN yarn global add serve
EXPOSE 5173
CMD ["serve", "-s", "build", "-l", "5173"]
