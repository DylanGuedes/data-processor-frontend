FROM node:8.9.2

WORKDIR /usr/src/app

ENV PATH=/usr/src/app/bin:$PATH

# 4: Install ember-cli and friends:
RUN set -ex \
  && npm install -g ember-cli \
  && npm install -g bower \
  && npm install -g check-dependencies

# 6: Expose the app and live-reload ports:
EXPOSE 4200 35730

# 7: Set the default command:
CMD ["ember", "server", "--live-reload-port", "35730"]
