import { Construct } from 'constructs';
import { EnvironmentConstruct } from '@almamedia-open-source/cdk-project-target';
import { TesmiStack } from './tesmi-stack';


export class Environment extends EnvironmentConstruct {
  constructor(scope: Construct) {
    super(scope);

    new TesmiStack(this, 'Foo', { summary: 'foo stack '})
  }
}
