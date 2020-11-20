#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {CdkpipelinesDemoPipelineStack} from '../lib/cdkpipelines-demo-pipeline-stack';
import { CdkpipelinesDemoStage } from '../lib/cdkpipelines-demo-stage';

const app = new cdk.App();
new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack',
    {
      env: {account: '468454216279', region: 'us-east-1'},
    });

// new CdkpipelinesDemoStage(app, 'Dev', {
//   env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
// });

// new CdkpipelinesDemoStage(app, 'Dev', {
//   env: { account: '645870768966', region: 'us-east-1' },
// });

app.synth();