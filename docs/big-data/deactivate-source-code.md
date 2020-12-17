# Source Code Repository of Tracking Data Pipeline

[https://github.com/Appsero/deactivate_pipeline](https://github.com/Appsero/deactivate_pipeline)


## Running Pipeline on Cloud for Testing:
```
python main.py \
  --region us-central1 \
  --runner DataflowRunner \
  --project appsero \
  --temp_location gs://appsero-tracking/tmp/
```

## Create a docker image for flex template:
```gcloud builds submit --tag gcr.io/appsero/deactivate_pipeline```

## Create a Flex Template:
```
gcloud dataflow flex-template build gs://appsero-tracking/templates/flex_deactivation_pipeline.json \
  --image "gcr.io/appsero/deactivate_pipeline" \
  --sdk-language "PYTHON" \
  --metadata-file "metadata.json"
```

## Running Flex Template From Command line:
```
gcloud dataflow flex-template run "tracking-pipeline" \
    --template-file-gcs-location "gs://appsero-tracking/templates/flex_deactivation_pipeline.json" \
    --region "us-central1"
```

## Running Flex Template by REST API Call:
```
https://dataflow.googleapis.com/v1b3/projects/appsero/locations/us-central1/flexTemplates:launch
{
    "launch_parameter": {
      "jobName": "deactivate-data-pipeline",
      "parameters": {
        
      },
      "containerSpecGcsPath": "gs://appsero-tracking/templates/flex_deactivation_pipeline.json"
    }
}
```
