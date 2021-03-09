# FROM creates a layer from the node 12 Docker image.
FROM 891678085460.dkr.ecr.us-east-1.amazonaws.com/common/baseimage:amazonlinux2-07312020

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -

RUN yum clean all && \
    yum makecache fast && \
    yum install -y gcc-c++ make nodejs

# Creating the root directory for the project
WORKDIR /epms-payment-ui/

# copying the root directory into the epms-payment-ui folder.
COPY . /epms-payment-ui/

# Setting ENV variable 
ENV PORT 80

# installing the application pacakges & build server.
RUN npm install
RUN npm run build:app

# port on which a container listens for connections
EXPOSE 80

# command to run server in the container.
CMD ["node", "dist/server/index.js"]