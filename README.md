# Week 16 lab

![Lint and test and deploy](https://github.com/github/docs/actions/workflows/main.yaml/badge.svg)

Week 16 Lab exercises on CI and CD. Using Github actions

This is a rudimentary [Express.js](https://expressjs.com/) based website. Your job is to get the CI fully setup and also the CD to get it deployed to AWS. Make a change and see it re-deployed

## Development

```bash
# running locally, sits on port 3000 by default
(cd app && DEBUG=* PORT=3000 npm start)
# to test
curl http://localhost:3000/\?language\=gurmukhi
# or
firefix http://localhost:3000/?language=gurmukhi

# unit testing
(cd app && npm test)

# linting
(cd app && npm run lint)

# security audit
(cd app && npm aduit)
```

## Links

- [Github Actions, Getting started](https://docs.github.com/en/actions/quickstart)
- EJS templating [https://ejs.co/](https://ejs.co/)

## Your mission

1. [ ] Fork the repo
1. [ ] Get it working locally
1. [ ] implement the missing steps in `.github/workflows/main.yaml`
   1. [ ] Add supply chain scanning and fix any issues
   1. [ ] Add unit testing
1. [ ] Create base infra as per two objectives and target arch below
1. [ ] Get infra scripts and continious deployment working by implementing `/infra/deploy.sh`
1. [ ] Implement the `/about` page and watch it deploy end-to-end

![target AWS arch](session-16-aws-target-arch.png)

### Objective 1 - get base infra working - get networking and CI working

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

### Objective 2 - create secondary infra

- [ ] Clickops a `t3.micro` instance in a public subnet with port 22 open and ssh in
- [ ] Use the `infra/ec2-user-data.sh` script to get your application working on there
- [ ] Delete that instance and script a `t3.micro` instance into the private subnet
- [ ] Create Network load balancer (NLB)
- [ ] Connect load balancer to instance
- [ ] Deploy application to a private instance
- [ ] Test application via load-balancer

![Stick your AWS secrets here](stick-secrets-here.png)
