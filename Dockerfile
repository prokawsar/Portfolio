# FROM node:16-alpine as build

# # install dependencies
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm ci
# # Copy all local files into the image.
# COPY . .
# RUN npm run build && npm prune --production


# FROM node:16-alpine
# WORKDIR /app
# COPY --from=build /app/build ./build
# COPY package.json ./

# EXPOSE 3000
# CMD ["node", "build"]


FROM node:16.19.0-alpine3.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm ci --prod

FROM node:16.19.0-alpine3.16
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build


EXPOSE 3000
CMD ["node","build"]