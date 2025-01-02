target "storybook-dist" {
  target = "storybook-dist"
  output = [
    "type=local,dest=./storybook-static",
    "type=cacheonly"
  ]
  cache-to = [
    "type=gha,mode=max,scope=storybook"
  ]
  cache-from = [
    "type=gha,scope=storybook"
  ]
}

target "dist" {
  target = "dist"
  output = [
    "type=local,dest=./dist",
    "type=cacheonly"
  ]
  cache-to = [
    "type=gha,mode=max,scope=library"
  ]
  cache-from = [
    "type=gha,scope=library"
  ]
}

group "default" {
  targets = ["storybook-dist", "dist"]
}