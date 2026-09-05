// Example lab-results export.
//
// To use your own data: download your export from the ehealth portal, then save it here
// (same filename, same folder as lab-timeline.html) as:
//
//   const LAB_RESULTS = <paste your exported JSON array here, unchanged>;
//
const LAB_RESULTS = [
  {
    "labResultDate": "2023-01-10T09:00:00",
    "group": [
      {
        "groupName": "Renal Function Panel",
        "results": [
          { "clinicalCode": { "text": "Creatinine", "code": [] },
            "values": { "value": "78", "unitText": "µmol/L", "rangeDisplayText": "55-110", "isValueInRange": true } },
          { "clinicalCode": { "text": "Sodium", "code": [] },
            "values": { "value": "140", "unitText": "mmol/L", "rangeDisplayText": "135-145", "isValueInRange": true } }
        ]
      },
      {
        "groupName": "Lipid Profile",
        "results": [
          { "clinicalCode": { "text": "Total Cholesterol", "code": [] },
            "values": { "value": "4.4", "unitText": "mmol/L", "rangeDisplayText": "3.00-5.20", "isValueInRange": true } }
        ]
      }
    ]
  },
  {
    "labResultDate": "2023-07-14T09:00:00",
    "group": [
      {
        "groupName": "Renal Function Panel",
        "results": [
          { "clinicalCode": { "text": "Creatinine", "code": [] },
            "values": { "value": "84", "unitText": "µmol/L", "rangeDisplayText": "55-110", "isValueInRange": true } },
          { "clinicalCode": { "text": "Sodium", "code": [] },
            "values": { "value": "138", "unitText": "mmol/L", "rangeDisplayText": "135-145", "isValueInRange": true } },
          { "clinicalCode": { "text": "Glomerular Filtration Rate/1.73 Sq M Predicted (CKD-EPI)",
              "code": [ { "value": "EGFR1", "type": "http://fhir.ehealthsask.ca/diagnosticIdentifiers/LAB/EHS/sourceTestCode" } ] },
            "values": { "value": "95", "unitText": "", "rangeDisplayText": "See below" } }
        ]
      },
      {
        "groupName": "Lipid Profile",
        "results": [
          { "clinicalCode": { "text": "Total Cholesterol", "code": [] },
            "values": { "value": "5.6", "unitText": "mmol/L", "rangeDisplayText": "3.00-5.20", "isValueInRange": false },
            "interpretationCode": "H" }
        ]
      }
    ]
  },
  {
    "labResultDate": "2024-02-02T09:00:00",
    "group": [
      {
        "groupName": "Renal Function Panel",
        "results": [
          { "clinicalCode": { "text": "Creatinine", "code": [] },
            "values": { "value": "91", "unitText": "µmol/L", "rangeDisplayText": "55-110", "isValueInRange": true } },
          { "clinicalCode": { "text": "Glomerular Filtration Rate/1.73 Sq M Predicted (CKD-EPI)",
              "code": [ { "value": "EGFR1", "type": "http://fhir.ehealthsask.ca/diagnosticIdentifiers/LAB/EHS/sourceTestCode" } ] },
            "values": { "value": "88", "unitText": "" } }
        ]
      },
      {
        "groupName": "Urinalysis Panel",
        "results": [
          { "clinicalCode": { "text": "Protein; Urine", "code": [] },
            "values": { "displayValue": "Trace", "rangeDisplayText": "Negative" },
            "abnormalityIndicator": "Abnormal" }
        ]
      },
      {
        "groupName": "Microbiology",
        "results": [],
        "attachmentCount": 1
      }
    ]
  }
];
