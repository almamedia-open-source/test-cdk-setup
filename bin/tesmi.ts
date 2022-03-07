#!/usr/bin/env node
import 'source-map-support/register';
import { Project } from '@almamedia-open-source/cdk-project-context';
import { Accounts } from '@almamedia-open-source/cdk-project-target';
import { Environment } from '../lib/environment';

// new Project instead of new App
const project = new Project({
  name: 'my-cool-project',
  author: {
    organization: 'Acme Corp',
    name: 'Mad Scientists',
    email: 'mad.scientists@acme.example.com',
  },
  defaultRegion: 'eu-west-1', // defaults to one of: $CDK_DEFAULT_REGION, $AWS_REGION or us-east-1
  accounts: Accounts.two({
    dev: {
      id: '804073423925',
      config: {
        baseDomain: 'example.net',
      },
    },
    prod: {
      id: '710449194871',
      config: {
        baseDomain: 'example.com',
      },
    },
  }),
})

new Environment(project);
