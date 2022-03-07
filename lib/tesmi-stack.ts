import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ProjectStack, ProjectStackProps } from '@almamedia-open-source/cdk-project-stack';
import { UrlName } from '@almamedia-open-source/cdk-project-names';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class TesmiStack extends ProjectStack {
  constructor(scope: Construct, id: string, props: ProjectStackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "Bucket", {
      bucketName: UrlName.globally(this, "tesmi"),
    });

    new CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
    });
  }
}
