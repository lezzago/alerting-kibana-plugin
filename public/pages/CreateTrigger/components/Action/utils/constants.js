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

import React from 'react';
import Message from '../actions/index';

export const ActionsMap = {
  sns: {
    label: 'Amazon SNS notification',
    component: (props) => <Message {...props} />,
  },
  slack: {
    label: 'Slack notification',
    component: (props) => <Message {...props} />,
  },
  chime: {
    label: 'Amazon Chime notification',
    component: (props) => <Message {...props} />,
  },
  custom_webhook: {
    label: 'Custom webhook',
    component: (props) => <Message isSubjectDisabled {...props} />,
  },
  email: {
    label: 'Email notification',
    component: (props) => <Message {...props} />,
  },
};
