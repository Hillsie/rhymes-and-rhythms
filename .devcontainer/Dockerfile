FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye as base

# Upate the base image versions
RUN sudo apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && sudo apt-get -y install --no-install-recommends \
    && sudo apt-get install openssl -y \
# Clean up
    && sudo apt-get autoremove -y \
    && sudo apt-get clean -y \
    && sudo rm -rf /var/lib/apt/lists/*

# Install the AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && sudo ./aws/install \
    && rm -rf awscliv2.zip \
    && rm -rf aws

WORKDIR /usr/src/app
