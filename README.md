# Week 16 lab

Week 16 Lab exercises on CI and CD. Using Github actions

This is a rudimentary [Express.js](https://expressjs.com/) based website. Your job is to get the CI fully setup and also the CD to get it deployed to AWS

## Development

```bash
# running locally
(cd app && npm start)

# unit testing
(cd app && npm test)

# linting
(cd app && npm run lint)

# security audit
(cd app && npm aduit)

```

## Links

see

- [Github Actions, Getting started](https://docs.github.com/en/actions/quickstart)
- EJS templating [https://ejs.co/](https://ejs.co/)

## Your mission

1. [ ] Fork the repo
1. [ ] implement the 
1. Create a new project called `combined/` which outputs a
   hello greeting depending on the language you pass in the url 1. [ ] It must lint 1. [ ] It must check for known security vulns in dependencies 1. [ ] It must run unit tests for new languages
1. Add secrets scanning (`git-secrets`? `talisman`?)

## Session 16 todo

![target AWS arch](session-16-aws-target-arch.png)

### Objective get networking and CI working

- [ ] Create VPC: `10.0.0.0/22`
- [ ] Get Github actions to deploy your IaC

- [ ] Create Pub subnets:
  - [ ] a: `10.0.0.0/24`
  - [ ] b: `10.0.1.0/24`
- [ ] Create Pvt Subnets:
  - [ ] a: `10.0.2.0/24`
- [ ] Create IGW
- [ ] Create Public Route Tables
- [ ] Create NAT gateway
- [ ] Create Private Route Table

### Objective create secondary infra

- [ ] Clickops a `t3.micro` instance in a public subnet with port 22 open and ssh in
- [ ] Delete that instance and script a `t3.micro` instance into the private subnet
- [ ] Create Network load balancer (NLB)
- [ ] Connect load balancer to instance
- [ ] Deploy application to private instance

![Stick your secrets here](stick-secrets-here.png)
