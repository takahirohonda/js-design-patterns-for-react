import {
  publish,
  subscribe,
  unsubscribe,
  unsubscribeAll,
} from './utils-sub-pub'

describe('utils-sub-pub', () => {
  beforeEach(() => {
    // Clean up all listeners before each test
    unsubscribeAll('test-event')
    unsubscribeAll('another-event')
  })

  it('should call subscribed listener when event is published', () => {
    const listener = jest.fn()
    subscribe('test-event', listener)
    publish('test-event', 'hello')
    expect(listener).toHaveBeenCalledWith('hello')
  })

  it('should not call unsubscribed listener', () => {
    const listener = jest.fn()
    subscribe('test-event', listener)
    unsubscribe('test-event', listener)
    publish('test-event', 'data')
    expect(listener).not.toHaveBeenCalled()
  })

  it('should not call listener for different event', () => {
    const listener = jest.fn()
    subscribe('test-event', listener)
    publish('another-event', 'data')
    expect(listener).not.toHaveBeenCalled()
  })

  it('should not subscribe the same listener twice', () => {
    const listener = jest.fn()
    subscribe('test-event', listener)
    subscribe('test-event', listener)
    publish('test-event', 'foo')
    expect(listener).toHaveBeenCalledTimes(1)
  })

  it('should remove all listeners for an event with unsubscribeAll', () => {
    const listener1 = jest.fn()
    const listener2 = jest.fn()
    subscribe('test-event', listener1)
    subscribe('test-event', listener2)
    unsubscribeAll('test-event')
    publish('test-event', 'bar')
    expect(listener1).not.toHaveBeenCalled()
    expect(listener2).not.toHaveBeenCalled()
  })
})
