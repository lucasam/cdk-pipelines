#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {CdkpipelinesDemoPipelineStack} from '../lib/cdkpipelines-demo-pipeline-stack';

const app = new cdk.App();
new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack',
    {
      env: {account: '468454216279', region: 'us-east-1'},
    });


app.synth();