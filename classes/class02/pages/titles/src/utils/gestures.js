const { GestureDescription, Finger, FingerCurl } = window.fp
  
const ScrollDownGesture = new GestureDescription('scroll-down'); // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up'); // 🖐
const RockOnGesture = new GestureDescription('rock-on'); // 🤟

// Scroll Down
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Scroll Up
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    ScrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// RockOn
// -----------------------------------------------------------------------------
  
// middle and ring: curled
RockOnGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
RockOnGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

// all other fingers: no curl
for(let finger of [Finger.Thumb, Finger.Pink, Finger.Index]) {
  RockOnGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  RockOnGesture
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'rock-on': '🤟'
}

export {
  knownGestures,
  gestureStrings
}