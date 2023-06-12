import { renderHook } from '@testing-library/react';
import React from 'react';

import { useDisableOnClick, useDisableOnChange } from './useDisableOnEvent';

describe('useIsDisabledOnClick', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('produces a function to prevent event default', () => {
    const mockEvent = new MouseEvent('click') as unknown as React.MouseEvent;
    Object.assign(mockEvent, {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    const onClick = () => {};
    Object.assign(onClick, mockEvent);
    const { result } = renderHook(() =>
      useDisableOnClick(onClick, { disabled: true }),
    );
    expect(result.current).not.toEqual(onClick);

    result.current(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });
});

describe('useIsDisabledOnChange', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('produces a function to prevent event default', () => {
    const mockEvent = new MouseEvent('change') as unknown as React.ChangeEvent;
    Object.assign(mockEvent, {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    const onChange = () => {};
    Object.assign(onChange, mockEvent);
    const { result } = renderHook(() =>
      useDisableOnChange(onChange, { disabled: true }),
    );
    expect(result.current).not.toEqual(onChange);

    result.current(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });
});
