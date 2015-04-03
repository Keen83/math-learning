FROM ubuntu
MAINTAINER kanary@inbox.ru

RUN \
	apt-get update && \
	apt-get install -y curl && \
	curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash - && \
	apt-get install -y git && \
	apt-get install -y nodejs && \
	apt-get install -y build-essential && \
	npm install -g bower


VOLUME ["/webapp"]
WORKDIR /webapp

EXPOSE 3000

CMD ["npm", "install"]
CMD ["bower", "--allow-root", "install"]
CMD ["node", "app.js"]