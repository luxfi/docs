terraform {
  backend "gcs" {
    bucket = "my-lux-project"
    prefix  = "state"
  }
}
