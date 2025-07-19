# Ring Buffer

RingBuffer is used to represent a generic, fixed-length raw binary data buffer.

RingBuffer

```
[                   ]
0 ... h .... t .... M
```

```
[                       ]
0 .... h+1 .... t+1 ... M
```

The tail can be behind head...

```
[                   ]
0 ... t .... h .... M
```

tail can behind head...
