/**
 * ng2-idle - A module for responding to idle users in Angular2 applications.
 # @author Mike Grabski <me@mikegrabski.com> (http://mikegrabski.com/)
 * @version v1.0.0-alpha.10
 * @link https://github.com/HackedByChinese/ng2-idle.git#readme
 * @license MIT
 */
import { EventEmitter } from 'angular2/core';
import { InterruptArgs } from './interruptargs';
export declare abstract class InterruptSource {
    protected attachFn: (source: InterruptSource) => void;
    protected detachFn: (source: InterruptSource) => void;
    isAttached: boolean;
    onInterrupt: EventEmitter<InterruptArgs>;
    constructor(attachFn?: (source: InterruptSource) => void, detachFn?: (source: InterruptSource) => void);
    attach(): void;
    detach(): void;
}
