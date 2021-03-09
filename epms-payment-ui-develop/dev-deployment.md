# Stpes to build the dev docker image

## Build the docker image.
`docker build -f Dockerfile.local -t epms-payment-ui .`

## Use below command to register docker to AWS ECR
`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 248847483068.dkr.ecr.us-east-1.amazonaws.com`

## Tag image to aws environment
`docker tag epms-payment-ui:latest 248847483068.dkr.ecr.us-east-1.amazonaws.com/ets-dev-iad-epms-ecr-repo:epms-payment-ui`

## Push Image to AWS ECR
`docker push 248847483068.dkr.ecr.us-east-1.amazonaws.com/ets-dev-iad-epms-ecr-repo:epms-payment-ui`

# steps to build the client files

## CD into client directory and execute the following command
`cd client && ng build --configuration=dev`