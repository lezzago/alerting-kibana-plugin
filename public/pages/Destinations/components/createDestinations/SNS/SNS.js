/*
 *   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React, { Component } from 'react';
import { FormikFieldText } from '../../../../../components/FormControls';
import { isInvalid, hasError } from '../../../../../utils/validate';
import { validateSNSTopicARN, validateIAMRoleARN } from './validate';

export default class SNS extends Component {
  render() {
    const { type } = this.props;
    return (
      <div>
        <FormikFieldText
          name={`${type}.topic_arn`}
          formRow
          fieldProps={{ validate: validateSNSTopicARN }}
          rowProps={{
            label: 'SNS topic ARN',
            helpText:
              'IAM user access and secret key credentials are required to access the SNS topic. Please add the following two fields to Elastic Keystore: <br>opendistro.alerting.destination.sns.access.key: [accessKey] <br>opendistro.alerting.destination.sns.secret.key: [secretKey]',
            style: { paddingLeft: '10px' },
            isInvalid,
            error: hasError,
          }}
          inputProps={{ isInvalid }}
        />
      </div>
    );
  }
}
