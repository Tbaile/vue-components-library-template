target "storybook-dist" {
  target = "storybook-dist"
  output = [
    "type=local,dest=./storybook-static"
  ]
  cache-to = [
    "type=gha,mode=max,scope=storybook"
  ]
}

target "dist" {
  target = "dist"
  output = [
    "type=local,dest=./dist"
  ]
  cache-to = [
    "type=gha,mode=max,scope=library"
  ]
}

group "default" {
  targets = ["storybook-dist", "dist"]
}