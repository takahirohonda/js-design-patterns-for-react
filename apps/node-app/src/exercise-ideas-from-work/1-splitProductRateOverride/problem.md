#  splitProductRateOverride

Transform the result data into the expected one.

```js
const mockServicingQueryResultsData = {
  results: [
    {
      "lender": "AMP",
      loanSplits: [
        {
          "uniqueId": "ac9e859f-4f41-4e12-8679-7e4165633d43",
          "productRate": 5.64,
          "hasRateOverride": false,
        },
        {
          "uniqueId": "bdb2559c-b777-4970-a4d0-352a93edd3f9",
          "productRate": 5.64,
          "hasRateOverride": false,
        }
      ]
    },
    {
      "lender": "CBA",
      loanSplits: [
        {
          "uniqueId": "dd89946a-fd6f-11f0-b403-005056b526da",
          "productRate": 2.0,
          "hasRateOverride": true,
        },
        {
          "uniqueId": "5444560f-3e20-4319-bbcf-7c97619604ae",
          "productRate": 3.0,
          "hasRateOverride": true,
        }
      ]
    },
    {
      "lender": "BWS",
      loanSplits: [
        {
          "uniqueId": "c9e859f-4f41-4e12-8679-7e4165633d43",
          "productRate": 5.64,
          "hasRateOverride": false,
        },
        {
          "uniqueId": "bdb2559c-b777-4970-a4d0-352a93edd3f",
          "productRate": 4,
          "hasRateOverride": true,
        }
      ]
    },
    {
      "lender": "TMB",
      loanSplits: [
        {
          "uniqueId": "ac9e859f-4f41-4e12-8679-7e4165633d43",
          "productRate": 1.5,
          "hasRateOverride": true,
        },
        {
          "uniqueId": "bdb2559c-b777-4970-a4d0-352a93edd3f9",
          "productRate": 5.64,
          "hasRateOverride": false,
        }
      ]
    }
  ]
}

const expectedOutput = {
  "CBA" : [
    {
      'dd89946a-fd6f-11f0-b403-005056b526da': 2,
      '5444560f-3e20-4319-bbcf-7c97619604ae': 3,
    }
  ],
  "BWS" : [
    {
      'bdb2559c-b777-4970-a4d0-352a93edd3f': 4,
    }
  ],
  "TMB" : [
    {
      'ac9e859f-4f41-4e12-8679-7e4165633d43': 1.5,
    }
  ],
}
```