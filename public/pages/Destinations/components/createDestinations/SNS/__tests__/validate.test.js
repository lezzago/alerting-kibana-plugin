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

import { validateSNSTopicARN, validateIAMRoleARN } from '../validate';

describe('validations', () => {
  describe('validateSNSTopicARN', () => {
    test('returns undefined if no error', () => {
      expect(validateSNSTopicARN('arn:aws:sns:us-west-2:475300751431:test-topic')).toBeUndefined();
    });

    test('returns Required string if falsy value', () => {
      expect(validateSNSTopicARN()).toBe('Required');
      expect(validateSNSTopicARN('')).toBe('Required');
    });

    test('returns Invalid SNS topic ARN string if invalid value', () => {
      const invalidText = 'Invalid SNS topic ARN';
      expect(validateSNSTopicARN('abc')).toBe(invalidText);
      expect(validateSNSTopicARN('asd arn:aws:sns:us-west-2:475300751431:test-topic')).toBe(
        invalidText
      );
      expect(validateSNSTopicARN('  arn:aws:sns:us-west-2:475300751431:test-topic  ')).toBe(
        invalidText
      );
      expect(validateSNSTopicARN('arn:aws:sns:us-west-2:475300751431:test-topic sdfdsf')).toBe(
        invalidText
      );
      // service name must be sns, below is iam and should fail
      expect(validateSNSTopicARN('arn:aws:iam:us-west-2:475300751431:test-topic')).toBe(
        invalidText
      );
    });
  });

  describe('validateIAMRoleARN', () => {
    test('returns undefined if no error', () => {
      expect(validateIAMRoleARN('arn:aws:iam::475300751431:role/test-alt10')).toBeUndefined();
    });

    test('returns Required string if falsy value', () => {
      expect(validateIAMRoleARN()).toBe('Required');
      expect(validateIAMRoleARN('')).toBe('Required');
    });

    test('returns Invalid IAM role ARN string if invalid value', () => {
      const invalidText = 'Invalid IAM role ARN';
      expect(validateIAMRoleARN('abc')).toBe(invalidText);
      expect(validateIAMRoleARN('asd arn:aws:iam::475300751431:role/test-alt10')).toBe(invalidText);
      expect(validateIAMRoleARN('  arn:aws:iam::475300751431:role/test-alt10  ')).toBe(invalidText);
      expect(validateIAMRoleARN('arn:aws:iam::475300751431:role/test-alt10 sdfdsf')).toBe(
        invalidText
      );
      // service name must be iam, below is sns and should fail
      expect(validateIAMRoleARN('arn:aws:sns::475300751431:role/test-alt10')).toBe(invalidText);
    });
  });
});
