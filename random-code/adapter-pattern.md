# Adapter pattern

```ts
// Adapter class
class VideoPlayerAdapter {
  constructor() {
    this.externalPlayer = new ThirdPartyVideoPlayer({
      // some configuration
    })
  }

  play() {
    const video = this.externalPlayer.getVideo()
    this.externalPlayer.playVideo(video, {
      // additional parameters
    })
  }
}

// Your application code
class Application {
  constructor() {
    this.videoPlayer = new VideoPlayerAdapter()
  }

  start() {
    // Play video using your application code
    this.videoPlayer.play()
  }
}
```

```ts
// Existing system with an incompatible interface
class OldSystem {
  specificMethod() {
    console.log('Old system specific method')
  }
}

// Target interface that the client code expects
class TargetInterface {
  requiredMethod() {}
}

// Adapter class that adapts OldSystem to TargetInterface
class Adapter extends TargetInterface {
  constructor(oldSystem) {
    super()
    this.oldSystem = oldSystem
  }

  requiredMethod() {
    this.oldSystem.specificMethod()
  }
}

// Client code that uses the adapter
const oldSystem = new OldSystem()
const adapter = new Adapter(oldSystem)

// Now, you can use the adapter as if it were an instance of TargetInterface
adapter.requiredMethod()
```
