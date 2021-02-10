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

export const getSNSTopicARNRegExpPattern = () =>
  `^arn:aws.*?:sns:([a-z]{2}-[a-z]+-\\d|[a-z]{2}-[a-z]{3}-[a-z]+-\\d)?:(\\d{12})?:(\\S*)$`;

export const getIAMRoleARNRegExpPattern = () => `^arn:aws.*?:iam::(\\d{12})?:(\\S*)$`;

export const validateSNSTopicARN = (value) => {
  if (!value) return 'Required';
  const pattern = getSNSTopicARNRegExpPattern();
  const isValidARN = new RegExp(pattern).test(value);
  if (!isValidARN) return 'Invalid SNS topic ARN';
};

export const validateIAMRoleARN = (value) => {
  if (!value) return 'Required';
  const pattern = getIAMRoleARNRegExpPattern();
  const isValidARN = new RegExp(pattern).test(value);
  if (!isValidARN) return 'Invalid IAM role ARN';
};
