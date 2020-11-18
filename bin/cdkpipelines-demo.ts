#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {CdkpipelinesDemoStack} from '../lib/cdkpipelines-demo-stack';

const app = new cdk.App();
new CdkpipelinesDemoStack(app, 'CdkpipelinesDemoStack',
    {
      env: {account: '468454216279', region: 'us-east-1'},
    });


app.synth();