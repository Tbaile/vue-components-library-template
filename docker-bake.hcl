target "storybook-dist" {
  target = "storybook-dist"
  output = [
    "type=local,dest=./storybook-static"
  ]
}

target "storybook-test" {
  target = "storybook-test"
  output = [
    "type=cacheonly"
  ]
}

target "dist" {
  target = "dist"
  output = [
    "type=local,dest=./dist"
  ]
}

group "default" {
  targets = ["storybook-dist", "dist"]
}