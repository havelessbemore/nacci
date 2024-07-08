import { OutOfBoundsError } from './outOfBoundsError';

export declare class UnsafeError extends OutOfBoundsError {
    constructor(actual: number);
}
