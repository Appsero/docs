# Source Code Repository of Tracking Data Pipeline:

[https://github.com/Appsero/tracking_pipeline](https://github.com/Appsero/tracking_pipeline)

## Running Pipeline on Cloud for Testing:
```
python main.py \
  --region us-central1 \
  --runner DataflowRunner \
  --project appsero \
  --temp_location gs://appsero-tracking/tmp/
```

## Create a docker image for flex template:
```
gcloud builds submit --tag gcr.io/appsero/track_pipeline
```

## Create Flex Template:
```
gcloud dataflow flex-template build gs://appsero-tracking/templates/flex_tracking.json \
  --image "gcr.io/appsero/track_pipeline" \
  --sdk-language "PYTHON" \
  --metadata-file "metadata.json"
```

## Running Flex Template From Command line:
```
gcloud dataflow flex-template run "tracking-pipeline" \
    --template-file-gcs-location "gs://appsero-tracking/templates/flex_tracking.json" \
    --region "us-central1"
```


## Running Flex Template by REST API Call:
```
https://dataflow.googleapis.com/v1b3/projects/appsero/locations/us-central1/flexTemplates:launch
{
    "launch_parameter": {
      "jobName": "tracking_data_pipeline",
      "parameters": {
        "tempLocation": "gs://appsero-tracking/tmp/",
      },
      "containerSpecGcsPath": "gs://appsero-tracking/templates/flex_tracking.json"
    }
}
```